import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BestCardsSpotlight } from './components/BestCardsSpotlight';
import { CardDetailModal } from './components/CardDetailModal';
import { LoungeCheckerModal } from './components/LoungeCheckerModal';
import { SpendCalculatorModal } from './components/SpendCalculatorModal';
import { DevaluationModal } from './components/DevaluationModal';
import { SubmitUpdateModal } from './components/SubmitUpdateModal';
import { CompareDrawer } from './components/CompareDrawer';
import { ReelModal } from './components/ReelModal';
import { CardInsiderCategories } from './components/CardInsiderCategories';
import { CardInsiderListing } from './components/CardInsiderListing';
import { CREDIT_CARDS } from './data/cards';
import type { CreditCard } from './data/cards';
import { Scale, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuickFilter, setActiveQuickFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'value' | 'fee-asc' | 'lounge-desc' | 'min-spend-asc'>('value');
  const [selectedTier, setSelectedTier] = useState<'All' | 'Beginner' | 'Mid-Tier' | 'Premium'>('All');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Faceted Filters
  const [selectedBank, setSelectedBank] = useState<string>('All');
  const [onlyLTF, setOnlyLTF] = useState<boolean>(false);
  const [onlyLounge, setOnlyLounge] = useState<boolean>(false);
  const [onlyRuPay, setOnlyRuPay] = useState<boolean>(false);
  const [onlyZeroForex, setOnlyZeroForex] = useState<boolean>(false);
  const [onlyNoAccountNeeded, setOnlyNoAccountNeeded] = useState<boolean>(false);
  const [onlyWealthLTF, setOnlyWealthLTF] = useState<boolean>(false);

  // Modals state
  const [selectedCardForDetail, setSelectedCardForDetail] = useState<CreditCard | null>(null);
  const [isLoungeModalOpen, setIsLoungeModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [isDevaluationModalOpen, setIsDevaluationModalOpen] = useState(false);
  const [isSubmitUpdateModalOpen, setIsSubmitUpdateModalOpen] = useState(false);
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);

  // Comparison selection
  const [comparedCardIds, setComparedCardIds] = useState<string[]>([]);
  const [isCompareDrawerOpen, setIsCompareDrawerOpen] = useState(false);

  // Quick Filter Handler
  const handleSelectQuickFilter = (pillId: string | null) => {
    setActiveQuickFilter(pillId);
    if (!pillId) {
      setSelectedTier('All');
      setOnlyLTF(false);
      setOnlyLounge(false);
      setOnlyRuPay(false);
      setOnlyZeroForex(false);
      setOnlyNoAccountNeeded(false);
      return;
    }

    if (pillId === 'tier-beginner') {
      setSelectedTier('Beginner');
      setOnlyLTF(false);
      setOnlyLounge(false);
      setOnlyRuPay(false);
      setOnlyZeroForex(false);
    } else if (pillId === 'tier-mid') {
      setSelectedTier('Mid-Tier');
      setOnlyLTF(false);
      setOnlyLounge(false);
      setOnlyRuPay(false);
      setOnlyZeroForex(false);
    } else if (pillId === 'tier-premium') {
      setSelectedTier('Premium');
      setOnlyLTF(false);
      setOnlyLounge(false);
      setOnlyRuPay(false);
      setOnlyZeroForex(false);
    } else if (pillId === 'best-cards') {
      setActiveQuickFilter('best-cards');
      setSelectedBank('All');
      setSelectedTier('All');
      setOnlyLTF(false);
      setOnlyLounge(false);
      setOnlyRuPay(false);
      setOnlyZeroForex(false);
      setOnlyNoAccountNeeded(false);
    } else if (pillId === 'lounge-free') {
      setOnlyLounge(true);
      setOnlyLTF(false);
      setOnlyRuPay(false);
      setOnlyZeroForex(false);
    } else if (pillId === 'rupay-upi') {
      setOnlyRuPay(true);
      setOnlyLounge(false);
      setOnlyLTF(false);
      setOnlyZeroForex(false);
    } else if (pillId === 'ltf') {
      setOnlyLTF(true);
      setOnlyLounge(false);
      setOnlyRuPay(false);
      setOnlyZeroForex(false);
    } else if (pillId === 'zero-forex') {
      setOnlyZeroForex(true);
      setOnlyLounge(false);
      setOnlyLTF(false);
      setOnlyRuPay(false);
      setOnlyWealthLTF(false);
    } else if (pillId === 'wealth-ltf') {
      setOnlyWealthLTF(true);
      setOnlyLTF(false);
      setOnlyLounge(false);
      setOnlyRuPay(false);
      setOnlyZeroForex(false);
    }
  };

  // Filtered & Sorted Cards Memo
  const filteredAndSortedCards = useMemo(() => {
    const list = CREDIT_CARDS.filter((card) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = card.name.toLowerCase().includes(q);
        const matchesBank = card.bank.toLowerCase().includes(q);
        const matchesBestFor = card.bestFor.toLowerCase().includes(q);
        const matchesType = card.cardType.toLowerCase().includes(q);
        if (!matchesName && !matchesBank && !matchesBestFor && !matchesType) {
          return false;
        }
      }

      // Quick filter special rules
      if (activeQuickFilter === 'best-cards') {
        const topPickIds = [
          'hsbc-live-plus',
          'sbi-cashback',
          'indusind-tiger',
          'scapia-federal',
          'hdfc-infinia',
          'axis-atlas',
          'au-zenith-plus',
          'kotak-white-reserve',
          'yes-marquee-metal'
        ];
        if (!topPickIds.includes(card.id)) return false;
      } else if (activeQuickFilter === 'lounge-free') {
        if (card.loungeAccess.domesticQuarterly === 0 || card.loungeAccess.spendRequiredPreviousQuarter > 0) {
          return false;
        }
      } else if (activeQuickFilter === 'zero-forex') {
        if (card.forexMarkup > 0) return false;
      } else if (activeQuickFilter === 'cashback') {
        if (card.cardType !== 'Cashback') return false;
      }

      // Tier filter
      if (selectedTier === 'Beginner' && card.tier !== 'Beginner') return false;
      if (selectedTier === 'Mid-Tier' && card.tier !== 'Mid-Tier') return false;
      if (selectedTier === 'Premium' && card.tier !== 'Premium' && card.tier !== 'Super-Premium') return false;

      // Bank filter
      if (selectedBank !== 'All' && card.bank !== selectedBank) {
        return false;
      }

      // Toggles
      if (onlyLTF && !card.isLTF) return false;
      if (onlyLounge && card.loungeAccess.domesticQuarterly === 0) return false;
      if (onlyRuPay && !card.rupayUPI) return false;
      if (onlyZeroForex && card.forexMarkup > 0) return false;
      if (onlyNoAccountNeeded && card.accountRequirement.isAccountNeeded) return false;
      if (onlyWealthLTF) {
        const req = (card.accountRequirement.tierName + ' ' + card.accountRequirement.details).toLowerCase();
        if (!req.includes('wealth') && !req.includes('pioneer') && !req.includes('alumni')) {
          return false;
        }
      }

      return true;
    });

    // Sorting by return and value
    return list.sort((a, b) => {
      if (sortBy === 'fee-asc') {
        return a.annualFee - b.annualFee;
      }
      if (sortBy === 'min-spend-asc') {
        const getMinSpend = (c: CreditCard) => c.isLTF ? 0 : (c.feeWaiverSpend ?? (c.annualFee * 100));
        return getMinSpend(a) - getMinSpend(b);
      }
      if (sortBy === 'lounge-desc') {
        return (b.loungeAccess.domesticQuarterly + b.loungeAccess.internationalYearly) - 
               (a.loungeAccess.domesticQuarterly + a.loungeAccess.internationalYearly);
      }
      // Default: Highest Net Return Value Score
      return b.netReturnValueScore - a.netReturnValueScore;
    });
  }, [searchQuery, activeQuickFilter, selectedTier, selectedBank, onlyLTF, onlyLounge, onlyRuPay, onlyZeroForex, onlyNoAccountNeeded, sortBy]);

  const comparedCards = useMemo(() => {
    return CREDIT_CARDS.filter((c) => comparedCardIds.includes(c.id));
  }, [comparedCardIds]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        onOpenCalculator={() => setIsCalculatorModalOpen(true)}
        onOpenLoungeChecker={() => setIsLoungeModalOpen(true)}
        onOpenDevaluations={() => setIsDevaluationModalOpen(true)}
        onOpenSubmitUpdate={() => setIsSubmitUpdateModalOpen(true)}
        onOpenReel={() => setIsReelModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeQuickFilter={activeQuickFilter}
        onSelectQuickFilter={handleSelectQuickFilter}
        onOpenReel={() => setIsReelModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Curated Best Cards (The 2026 Trifecta) Spotlight */}
        <BestCardsSpotlight
          cards={CREDIT_CARDS}
          onSelectCard={(c) => setSelectedCardForDetail(c)}
        />

        {/* Card Insider Style Category Quick Cards & Bank Issuer Selector */}
        <CardInsiderCategories
          activeCategory={activeQuickFilter}
          onSelectCategory={handleSelectQuickFilter}
          selectedBank={selectedBank}
          onSelectBank={setSelectedBank}
          totalCards={CREDIT_CARDS.length}
        />

        {/* Feature Toggles Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-6 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider mr-1">
            Filter Perks:
          </span>

          <button
            onClick={() => setOnlyNoAccountNeeded(!onlyNoAccountNeeded)}
            className={`px-3 py-1 rounded-xl text-xs font-bold border transition flex items-center space-x-1 ${
              onlyNoAccountNeeded
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>No Bank A/C Needed</span>
          </button>

          <button
            onClick={() => setOnlyLTF(!onlyLTF)}
            className={`px-3 py-1 rounded-xl text-xs font-bold border transition ${
              onlyLTF
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            🎁 Lifetime Free (₹0)
          </button>

          <button
            onClick={() => setOnlyWealthLTF(!onlyWealthLTF)}
            className={`px-3 py-1 rounded-xl text-xs font-bold border transition flex items-center space-x-1 ${
              onlyWealthLTF
                ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                : 'bg-purple-50/70 border-purple-200 text-purple-900 hover:bg-purple-100'
            }`}
          >
            <span>💎 Free for Wealth Accounts</span>
          </button>

          <button
            onClick={() => setOnlyLounge(!onlyLounge)}
            className={`px-3 py-1 rounded-xl text-xs font-bold border transition ${
              onlyLounge
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            ✈️ Has Airport Lounge
          </button>

          <button
            onClick={() => setOnlyRuPay(!onlyRuPay)}
            className={`px-3 py-1 rounded-xl text-xs font-bold border transition ${
              onlyRuPay
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            ⚡ RuPay UPI
          </button>

          <button
            onClick={() => setOnlyZeroForex(!onlyZeroForex)}
            className={`px-3 py-1 rounded-xl text-xs font-bold border transition ${
              onlyZeroForex
                ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            🌐 0% Forex Markup
          </button>
        </div>

        {/* Card Insider Cards & Table Listing */}
        <CardInsiderListing
          cards={filteredAndSortedCards}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          sortBy={sortBy}
          onSortByChange={setSortBy}
          comparedCardIds={comparedCardIds}
          onToggleCompare={(id) => {
            if (comparedCardIds.includes(id)) {
              setComparedCardIds(comparedCardIds.filter((i) => i !== id));
            } else {
              if (comparedCardIds.length >= 4) {
                alert('You can compare up to 4 credit cards at a time.');
                return;
              }
              setComparedCardIds([...comparedCardIds, id]);
            }
          }}
          onOpenCompare={() => setIsCompareDrawerOpen(true)}
          onSelectCard={(c) => setSelectedCardForDetail(c)}
          onCheckLounge={(c) => {
            setSelectedCardForDetail(c);
            setIsLoungeModalOpen(true);
          }}
          selectedTier={selectedTier}
        />
      </main>

      {/* Floating Compare Action Bar */}
      {comparedCardIds.length > 0 && !isCompareDrawerOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={() => setIsCompareDrawerOpen(true)}
            className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-2xl transition transform hover:scale-105"
          >
            <Scale className="w-4 h-4" />
            <span>Compare {comparedCardIds.length} Cards Side-by-Side</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8 px-4 text-center text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-slate-900 font-bold">CardTruth India</span>
            <span>— Audited against RBI Most Important Terms & Conditions (MITC).</span>
          </div>

          <div className="flex items-center space-x-3 text-slate-500 font-medium">
            <span>Link-in-Bio Ready</span>
            <span>•</span>
            <span className="text-blue-600 font-semibold">Human Curated</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CardDetailModal
        card={selectedCardForDetail}
        onClose={() => setSelectedCardForDetail(null)}
      />

      <LoungeCheckerModal
        isOpen={isLoungeModalOpen}
        onClose={() => setIsLoungeModalOpen(false)}
        onSelectCard={(c) => setSelectedCardForDetail(c)}
      />

      <SpendCalculatorModal
        isOpen={isCalculatorModalOpen}
        onClose={() => setIsCalculatorModalOpen(false)}
        onSelectCard={(c) => setSelectedCardForDetail(c)}
      />

      <DevaluationModal
        isOpen={isDevaluationModalOpen}
        onClose={() => setIsDevaluationModalOpen(false)}
      />

      <SubmitUpdateModal
        isOpen={isSubmitUpdateModalOpen}
        onClose={() => setIsSubmitUpdateModalOpen(false)}
      />

      <ReelModal
        isOpen={isReelModalOpen}
        onClose={() => setIsReelModalOpen(false)}
      />

      <CompareDrawer
        selectedCards={comparedCards}
        onRemoveCard={(id) => setComparedCardIds((prev) => prev.filter((i) => i !== id))}
        onClearAll={() => setComparedCardIds([])}
        isOpen={isCompareDrawerOpen}
        onClose={() => setIsCompareDrawerOpen(false)}
      />
    </div>
  );
}

export default App;
