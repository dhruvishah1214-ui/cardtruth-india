import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MasterTable } from './components/MasterTable';
import { BestCardsSpotlight } from './components/BestCardsSpotlight';
import { CardDetailModal } from './components/CardDetailModal';
import { LoungeCheckerModal } from './components/LoungeCheckerModal';
import { SpendCalculatorModal } from './components/SpendCalculatorModal';
import { DevaluationModal } from './components/DevaluationModal';
import { SubmitUpdateModal } from './components/SubmitUpdateModal';
import { CompareDrawer } from './components/CompareDrawer';
import { CREDIT_CARDS } from './data/cards';
import type { CreditCard } from './data/cards';
import { Scale, ShieldCheck, ArrowUpDown, CheckCircle2 } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuickFilter, setActiveQuickFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'value' | 'fee-asc' | 'lounge-desc' | 'min-spend-asc'>('value');
  const [selectedTier, setSelectedTier] = useState<'All' | 'Beginner' | 'Mid-Tier' | 'Premium'>('All');

  // Faceted Filters
  const [selectedBank, setSelectedBank] = useState<string>('All');
  const [onlyLTF, setOnlyLTF] = useState<boolean>(false);
  const [onlyLounge, setOnlyLounge] = useState<boolean>(false);
  const [onlyRuPay, setOnlyRuPay] = useState<boolean>(false);
  const [onlyZeroForex, setOnlyZeroForex] = useState<boolean>(false);
  const [onlyNoAccountNeeded, setOnlyNoAccountNeeded] = useState<boolean>(false);

  // Modals state
  const [selectedCardForDetail, setSelectedCardForDetail] = useState<CreditCard | null>(null);
  const [isLoungeModalOpen, setIsLoungeModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [isDevaluationModalOpen, setIsDevaluationModalOpen] = useState(false);
  const [isSubmitUpdateModalOpen, setIsSubmitUpdateModalOpen] = useState(false);

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

  const tierCounts = useMemo(() => {
    return {
      all: CREDIT_CARDS.length,
      beginner: CREDIT_CARDS.filter(c => c.tier === 'Beginner').length,
      mid: CREDIT_CARDS.filter(c => c.tier === 'Mid-Tier').length,
      premium: CREDIT_CARDS.filter(c => c.tier === 'Premium' || c.tier === 'Super-Premium').length,
    };
  }, []);

  const banksList = [
    'All',
    'Kotak',
    'HDFC',
    'SBI',
    'Axis',
    'ICICI',
    'Amex',
    'IndusInd',
    'IDFC FIRST',
    'Yes Bank',
    'HSBC',
    'AU Bank',
    'Federal Bank',
    'RBL',
    'BOB',
    'Standard Chartered'
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        onOpenCalculator={() => setIsCalculatorModalOpen(true)}
        onOpenLoungeChecker={() => setIsLoungeModalOpen(true)}
        onOpenDevaluations={() => setIsDevaluationModalOpen(true)}
        onOpenSubmitUpdate={() => setIsSubmitUpdateModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeQuickFilter={activeQuickFilter}
        onSelectQuickFilter={handleSelectQuickFilter}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Curated Best Cards (The 2026 Trifecta) Spotlight */}
        <BestCardsSpotlight
          cards={CREDIT_CARDS}
          onSelectCard={(c) => setSelectedCardForDetail(c)}
        />

        {/* Filters and Controls on Top */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6 shadow-sm space-y-3.5">
          {/* Row 0: Category Tier Division Tabs */}
          <div className="flex items-center space-x-2 pb-3 border-b border-slate-100 overflow-x-auto scrollbar-none">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 mr-1 flex-shrink-0">
              Category Tier:
            </span>
            <button
              onClick={() => setSelectedTier('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                selectedTier === 'All'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>All 3 Tiers</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                selectedTier === 'All' ? 'bg-slate-700 text-slate-200' : 'bg-slate-200 text-slate-700'
              }`}>
                {tierCounts.all}
              </span>
            </button>

            <button
              onClick={() => setSelectedTier('Beginner')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                selectedTier === 'Beginner'
                  ? 'bg-emerald-600 text-white shadow-xs font-extrabold'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/80'
              }`}
            >
              <span>🌱 Beginner & Starter</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                selectedTier === 'Beginner' ? 'bg-emerald-700 text-emerald-100' : 'bg-emerald-200/80 text-emerald-900'
              }`}>
                {tierCounts.beginner}
              </span>
            </button>

            <button
              onClick={() => setSelectedTier('Mid-Tier')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                selectedTier === 'Mid-Tier'
                  ? 'bg-blue-600 text-white shadow-xs font-extrabold'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200/80'
              }`}
            >
              <span>⚡ Mid-Tier & Lifestyle</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                selectedTier === 'Mid-Tier' ? 'bg-blue-700 text-blue-100' : 'bg-blue-200/80 text-blue-900'
              }`}>
                {tierCounts.mid}
              </span>
            </button>

            <button
              onClick={() => setSelectedTier('Premium')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                selectedTier === 'Premium'
                  ? 'bg-amber-600 text-white shadow-xs font-extrabold'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200/80'
              }`}
            >
              <span>👑 Premium & Metal</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                selectedTier === 'Premium' ? 'bg-amber-700 text-amber-100' : 'bg-amber-200/80 text-amber-900'
              }`}>
                {tierCounts.premium}
              </span>
            </button>
          </div>

          {/* Row 1: Bank Filter Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1 flex-shrink-0">
              Bank:
            </span>
            {banksList.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBank(b)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedBank === b
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Row 2: Criteria Toggles & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-slate-100">
            {/* Feature Toggles */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
                Filter:
              </span>

              {/* No Account Needed Toggle */}
              <button
                onClick={() => setOnlyNoAccountNeeded(!onlyNoAccountNeeded)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold border transition flex items-center space-x-1 ${
                  onlyNoAccountNeeded
                    ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>No Bank A/C Needed</span>
              </button>

              <button
                onClick={() => setOnlyLTF(!onlyLTF)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                  onlyLTF
                    ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Lifetime Free (₹0)
              </button>

              <button
                onClick={() => setOnlyLounge(!onlyLounge)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                  onlyLounge
                    ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Has Lounge
              </button>

              <button
                onClick={() => setOnlyRuPay(!onlyRuPay)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                  onlyRuPay
                    ? 'bg-indigo-600 text-white border-indigo-600 font-bold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                RuPay UPI
              </button>

              <button
                onClick={() => setOnlyZeroForex(!onlyZeroForex)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                  onlyZeroForex
                    ? 'bg-sky-600 text-white border-sky-600 font-bold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                0% Forex
              </button>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[11px] font-semibold text-slate-500">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-slate-200 text-slate-900 text-xs font-bold rounded-lg px-2.5 py-1 focus:outline-none focus:border-blue-600 shadow-xs"
              >
                <option value="value">Highest Net Value & Return</option>
                <option value="min-spend-asc">Lowest Minimum Spend (Fee Waiver)</option>
                <option value="fee-asc">Lowest Annual Fee</option>
                <option value="lounge-desc">Most Lounge Access</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-slate-600">
            Showing <strong className="text-slate-900 font-bold">{filteredAndSortedCards.length}</strong> audited credit cards in India
          </div>

          {comparedCardIds.length > 0 && (
            <button
              onClick={() => setIsCompareDrawerOpen(true)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare Selected ({comparedCardIds.length})</span>
            </button>
          )}
        </div>

        {/* Master Decision Table */}
        {filteredAndSortedCards.length > 0 ? (
          <MasterTable
            cards={filteredAndSortedCards}
            selectedTier={selectedTier}
            onSelectCard={(c) => setSelectedCardForDetail(c)}
          />
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-600 text-sm">No credit cards match your current search/filter combination.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBank('All');
                setOnlyLTF(false);
                setOnlyLounge(false);
                setOnlyRuPay(false);
                setOnlyZeroForex(false);
                setOnlyNoAccountNeeded(false);
                setActiveQuickFilter(null);
                setSortBy('value');
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
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
