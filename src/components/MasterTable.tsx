import React from 'react';
import type { CreditCard } from '../data/cards';
import { 
  Plane, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface MasterTableProps {
  cards: CreditCard[];
  selectedTier?: 'All' | 'Beginner' | 'Mid-Tier' | 'Premium';
  onSelectCard: (card: CreditCard) => void;
}

export const MasterTable: React.FC<MasterTableProps> = ({ cards, selectedTier = 'All', onSelectCard }) => {
  const sortByValue = (a: CreditCard, b: CreditCard) => b.netReturnValueScore - a.netReturnValueScore;

  const beginnerCards = cards.filter(c => c.tier === 'Beginner').sort(sortByValue);
  const midCards = cards.filter(c => c.tier === 'Mid-Tier').sort(sortByValue);
  const premiumCards = cards.filter(c => c.tier === 'Premium' || c.tier === 'Super-Premium').sort(sortByValue);

  const tierSections = [
    {
      key: 'beginner',
      title: '🌱 Beginner & High-Value Essentials',
      badge: `${beginnerCards.length} Cards`,
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      summary: '100% Lifetime Free (LTF) • RuPay UPI QR Payments • Top Everyday Value',
      headerBg: 'bg-emerald-50/80 border-y border-emerald-200 text-emerald-950',
      cards: beginnerCards
    },
    {
      key: 'mid',
      title: '⚡ Mid-Tier & Everyday Cashback Kings',
      badge: `${midCards.length} Cards`,
      badgeClass: 'bg-blue-100 text-blue-900 border-blue-300',
      summary: '5%–10% Accelerated Online Cashback • Dining & Groceries • Domestic Lounges',
      headerBg: 'bg-blue-50/80 border-y border-blue-200 text-blue-950',
      cards: midCards
    },
    {
      key: 'premium',
      title: '👑 Premium & Super-Premium Luxury',
      badge: `${premiumCards.length} Cards`,
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
      summary: 'Heavy Metal Cards • Unlimited Lounges + Guests • 3.3%–33.3% Travel Return',
      headerBg: 'bg-amber-50/80 border-y border-amber-200 text-amber-950',
      cards: premiumCards
    }
  ];

  const renderCardRow = (card: CreditCard, index: number) => {
    const isTopValue = index === 0;

    return (
      <tr
        key={card.id}
        onClick={() => onSelectCard(card)}
        className={`transition-colors cursor-pointer group border-b border-slate-100 ${
          isTopValue 
            ? 'bg-amber-50/30 hover:bg-amber-50/60 border-l-4 border-l-amber-500' 
            : 'bg-white hover:bg-slate-50/80'
        }`}
      >
        {/* 1. Rank & Best Value Pill */}
        <td className="py-4 px-3 text-center">
          {isTopValue ? (
            <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs mx-auto shadow-xs" title="Top Value For Money">
              1
            </div>
          ) : (
            <span className="font-bold text-xs text-slate-400 group-hover:text-blue-600 transition">
              {index + 1}
            </span>
          )}
        </td>

        {/* 2. Card Name & Issuer */}
        <td className="py-4 px-4 min-w-[220px]">
          <div className="flex items-center space-x-1.5 flex-wrap gap-1">
            <span className="font-black text-slate-900 group-hover:text-blue-600 transition text-sm">
              {card.name}
            </span>
            {isTopValue && (
              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-xs inline-flex items-center space-x-0.5">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Top Value</span>
              </span>
            )}
            {card.tier === 'Super-Premium' && (
              <span className="px-1.5 py-0.2 rounded bg-slate-900 text-amber-300 border border-slate-700 text-[9px] font-black uppercase tracking-wider">
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

        {/* 4. Annual Fee & Minimum Spend Rule (Explains Fee vs Spend Waiver) */}
        <td className="py-4 px-4 min-w-[200px]">
          {card.isLTF ? (
            <div>
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-900 border border-emerald-300">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>100% Free Forever</span>
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">
                ₹0 Fee • No minimum spend needed
              </span>
            </div>
          ) : card.feeWaiverSpend ? (
            <div>
              <div className="text-xs font-black text-slate-900">
                ₹{card.annualFee.toLocaleString('en-IN')}/yr
              </div>
              <div className="text-[11px] font-bold text-emerald-800 mt-0.5">
                Waived if spend &gt; ₹{(card.feeWaiverSpend / 100000).toFixed(1)}L/yr
              </div>
              <div className="text-[10px] text-rose-600 font-medium">
                ⚠️ If below, ₹{card.annualFee.toLocaleString('en-IN')} fee applies
              </div>
            </div>
          ) : (
            <div>
              <div className="text-xs font-black text-slate-900">
                ₹{card.annualFee.toLocaleString('en-IN')}/yr
              </div>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 mt-0.5">
                Mandatory Fee (No Waiver)
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                Fee applies regardless of spend
              </span>
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
              Ranked by Value for Money
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Top value-for-money cards shown first in each category. Click any row for complete rules.
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
              <th className="py-3 px-3 text-center w-12">Rank</th>
              <th className="py-3 px-4 min-w-[220px]">Card & Issuer</th>
              <th className="py-3 px-4 min-w-[170px]">
                <div className="flex items-center space-x-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  <span>True Net Return</span>
                </div>
              </th>
              <th className="py-3 px-4 min-w-[200px]">
                <div className="flex items-center space-x-1.5">
                  <Coins className="w-3.5 h-3.5 text-amber-600" />
                  <span>Fee & Spend Waiver</span>
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
                    {/* Sleek Category Header */}
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
              cards.sort(sortByValue).map((card, i) => renderCardRow(card, i))
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
