import React from 'react';
import type { CreditCard } from '../data/cards';
import { 
  Plane, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  CheckCircle2
} from 'lucide-react';

interface MasterTableProps {
  cards: CreditCard[];
  selectedTier?: 'All' | 'Beginner' | 'Mid-Tier' | 'Premium';
  onSelectCard: (card: CreditCard) => void;
}

export const MasterTable: React.FC<MasterTableProps> = ({ cards, selectedTier = 'All', onSelectCard }) => {
  const premiumCards = cards.filter(c => c.tier === 'Premium' || c.tier === 'Super-Premium');
  const midCards = cards.filter(c => c.tier === 'Mid-Tier');
  const beginnerCards = cards.filter(c => c.tier === 'Beginner');

  const tierSections = [
    {
      key: 'premium',
      title: '👑 Premium & Super-Premium Cards',
      badge: `${premiumCards.length} Cards`,
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
      summary: 'Heavy Metal Cards • Unlimited Lounges + Guests • 3.3%–33.3% Return',
      headerBg: 'bg-amber-50/70 border-y border-amber-200 text-amber-950',
      cards: premiumCards
    },
    {
      key: 'mid',
      title: '⚡ Mid-Tier & Everyday Lifestyle Cards',
      badge: `${midCards.length} Cards`,
      badgeClass: 'bg-blue-100 text-blue-900 border-blue-300',
      summary: '5% Accelerated Online Cashback • Dining Perks • Domestic Lounges',
      headerBg: 'bg-blue-50/70 border-y border-blue-200 text-blue-950',
      cards: midCards
    },
    {
      key: 'beginner',
      title: '🌱 Beginner & Starter Essentials',
      badge: `${beginnerCards.length} Cards`,
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      summary: '100% Lifetime Free (LTF) • RuPay UPI QR Payments • High Everyday Utility',
      headerBg: 'bg-emerald-50/70 border-y border-emerald-200 text-emerald-950',
      cards: beginnerCards
    }
  ];

  const renderCardRow = (card: CreditCard, index: number) => {
    return (
      <tr
        key={card.id}
        onClick={() => onSelectCard(card)}
        className="transition-colors cursor-pointer bg-white hover:bg-slate-50/80 group border-b border-slate-100"
      >
        {/* 1. Rank */}
        <td className="py-4 px-3 text-center font-bold text-xs text-slate-400 group-hover:text-blue-600 transition">
          {index + 1}
        </td>

        {/* 2. Card Name & Issuer */}
        <td className="py-4 px-4 min-w-[210px]">
          <div className="font-extrabold text-slate-900 group-hover:text-blue-600 transition text-sm flex items-center space-x-1.5">
            <span>{card.name}</span>
            {card.tier === 'Super-Premium' && (
              <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-300 text-[9px] font-black uppercase tracking-wider">
                Metal
              </span>
            )}
          </div>
          <div className="text-xs text-slate-500 flex items-center space-x-1.5 mt-0.5">
            <span className="font-semibold text-slate-700">{card.bank}</span>
            <span>•</span>
            <span>{card.network}</span>
            <span>•</span>
            <span className="text-[11px] text-slate-400">{card.tier}</span>
          </div>
        </td>

        {/* 3. True Net Return */}
        <td className="py-4 px-4 min-w-[170px]">
          <div className="flex items-center space-x-1.5">
            <span className="text-blue-700 font-black text-sm tracking-tight">
              {card.netReturnRate}
            </span>
            {card.returnStructure ? (
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider ${
                card.returnStructure.rewardType === 'Direct Cashback'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : card.returnStructure.rewardType === 'Flights & Hotels'
                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                  : card.returnStructure.rewardType === 'Air Miles'
                  ? 'bg-purple-50 text-purple-800 border border-purple-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                {card.returnStructure.rewardType}
              </span>
            ) : card.cardType === 'Cashback' ? (
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Cashback
              </span>
            ) : null}
          </div>
          <div className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
            {card.netReturnSummary}
          </div>
        </td>

        {/* 4. Annual Fee & Minimum Spend (Clean Unified Column) */}
        <td className="py-4 px-4 min-w-[170px]">
          {card.isLTF ? (
            <div>
              <span className="inline-flex items-center space-x-1 text-xs font-black text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>₹0 (Lifetime Free)</span>
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
                No minimum spend
              </span>
            </div>
          ) : (
            <div>
              <div className="text-xs font-extrabold text-slate-900">
                ₹{card.annualFee.toLocaleString('en-IN')}/yr
              </div>
              <div className="text-[11px] text-slate-600 mt-0.5">
                {card.feeWaiverSpend ? (
                  <span>
                    Min Spend: <strong className="text-slate-900">₹{(card.feeWaiverSpend / 100000).toFixed(1)}L</strong>/yr
                  </span>
                ) : (
                  <span className="text-slate-500">No fee waiver</span>
                )}
              </div>
            </div>
          )}
        </td>

        {/* 5. Airport Lounge & Min Spend */}
        <td className="py-4 px-4 min-w-[160px]">
          {card.loungeAccess.domesticQuarterly > 0 ? (
            <div>
              <div className="flex items-center space-x-1 text-xs font-bold text-slate-900">
                <Plane className="w-3.5 h-3.5 text-blue-600" />
                <span>
                  {card.loungeAccess.domesticQuarterly === 99
                    ? 'Unlimited'
                    : `${card.loungeAccess.domesticQuarterly}/quarter`}
                </span>
              </div>
              <div className="text-[11px] mt-0.5">
                {card.loungeAccess.spendRequiredPreviousQuarter === 0 ? (
                  <span className="text-emerald-700 font-bold">⭐ ₹0 Min Spend</span>
                ) : (
                  <span className="text-amber-800 font-medium">
                    Min ₹{card.loungeAccess.spendRequiredPreviousQuarter / 1000}k qtr spend
                  </span>
                )}
              </div>
            </div>
          ) : (
            <span className="text-xs text-slate-400">None</span>
          )}
        </td>

        {/* 6. Killer Perk */}
        <td className="py-4 px-4 text-xs text-slate-700 font-medium leading-relaxed min-w-[240px]">
          {card.bestFor}
        </td>

        {/* 7. Action */}
        <td className="py-4 px-4 text-right min-w-[110px]">
          <button className="px-3 py-1.5 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-bold text-xs transition inline-flex items-center space-x-1 shadow-xs">
            <span>Audit</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
      {/* Table Header Bar */}
      <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50/80">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-black text-slate-900">Credit Card Decision Matrix</h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
              Ranked by True Net Value
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Audited against bank Schedules of Charges and RBI MITC disclosures. Click any row for complete rules.
          </p>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Showing <strong className="text-slate-900 font-bold">{cards.length}</strong> audited cards
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-3 text-center w-12">#</th>
              <th className="py-3 px-4 min-w-[210px]">Card & Issuer</th>
              <th className="py-3 px-4 min-w-[170px]">
                <div className="flex items-center space-x-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  <span>True Net Return</span>
                </div>
              </th>
              <th className="py-3 px-4 min-w-[170px]">
                <div className="flex items-center space-x-1.5">
                  <Coins className="w-3.5 h-3.5 text-amber-600" />
                  <span>Fee & Min. Spend</span>
                </div>
              </th>
              <th className="py-3 px-4 min-w-[160px]">Airport Lounge</th>
              <th className="py-3 px-4 min-w-[240px]">Why It Wins</th>
              <th className="py-3 px-4 text-right min-w-[110px]">Details</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-slate-700">
            {selectedTier === 'All' ? (
              tierSections.map((section) => {
                if (section.cards.length === 0) return null;
                return (
                  <React.Fragment key={section.key}>
                    {/* Sleek Tier Header */}
                    <tr className={section.headerBg}>
                      <td colSpan={7} className="py-2.5 px-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs sm:text-sm font-black text-slate-900">
                              {section.title}
                            </span>
                            <span className={`px-2 py-0.2 rounded-full text-[10px] font-black border ${section.badgeClass}`}>
                              {section.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-600 font-medium hidden md:inline">
                            {section.summary}
                          </span>
                        </div>
                      </td>
                    </tr>
                    {section.cards.map((card, i) => renderCardRow(card, i))}
                  </React.Fragment>
                );
              })
            ) : (
              cards.map((card, i) => renderCardRow(card, i))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="p-3.5 border-t border-slate-200 bg-slate-50 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Every number verified against bank Schedule of Charges & RBI MITC.</span>
        </span>
        <span className="text-slate-400 font-medium">Click any row for complete exclusions and point math.</span>
      </div>
    </div>
  );
};
