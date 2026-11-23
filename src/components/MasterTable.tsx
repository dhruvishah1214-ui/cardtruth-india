import React, { useState } from 'react';
import type { CreditCard } from '../data/cards';
import { 
  Plane, 
  QrCode, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Lock, 
  Award, 
  Building, 
  CheckCircle2, 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  Coins, 
  Sparkles, 
  AlertTriangle,
  Info
} from 'lucide-react';

interface MasterTableProps {
  cards: CreditCard[];
  selectedTier?: 'All' | 'Beginner' | 'Mid-Tier' | 'Premium';
  onSelectCard: (card: CreditCard) => void;
}

export const MasterTable: React.FC<MasterTableProps> = ({ cards, selectedTier = 'All', onSelectCard }) => {
  const [expandedReturnCardId, setExpandedReturnCardId] = useState<string | null>(null);

  const premiumCards = cards.filter(c => c.tier === 'Premium' || c.tier === 'Super-Premium');
  const midCards = cards.filter(c => c.tier === 'Mid-Tier');
  const beginnerCards = cards.filter(c => c.tier === 'Beginner');

  const tierSections = [
    {
      key: 'premium',
      title: '👑 Premium & Super-Premium Cards',
      badge: `${premiumCards.length} Cards`,
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
      summary: 'Fee: ₹3,000–₹60,000 • Income > ₹1.5L/mo • Heavy Metal Cards, Unlimited Lounges + Guests, 3.3%–33.3% Return',
      headerBg: 'bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-white border-y border-amber-200 text-amber-950',
      cards: premiumCards
    },
    {
      key: 'mid',
      title: '⚡ Mid-Tier & Everyday Lifestyle Cards',
      badge: `${midCards.length} Cards`,
      badgeClass: 'bg-blue-100 text-blue-900 border-blue-300',
      summary: 'Fee: ₹500–₹3,000 • Income ₹30k–₹1.5L/mo • 5% Accelerated Online Cashback, Dining Perks & Domestic Lounges',
      headerBg: 'bg-gradient-to-r from-blue-500/15 via-blue-500/5 to-white border-y border-blue-200 text-blue-950',
      cards: midCards
    },
    {
      key: 'beginner',
      title: '🌱 Beginner & Starter Essentials',
      badge: `${beginnerCards.length} Cards`,
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      summary: 'Fee: ₹0–₹500 • Low / Zero Income Hurdle • Lifetime Free (LTF), RuPay UPI QR Payments & High Everyday Utility',
      headerBg: 'bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-white border-y border-emerald-200 text-emerald-950',
      cards: beginnerCards
    }
  ];

  const toggleReturnBreakdown = (cardId: string) => {
    setExpandedReturnCardId((prev) => (prev === cardId ? null : cardId));
  };
  
  const renderCardRow = (card: CreditCard, index: number) => {
    
              const gstFee = Math.round(card.annualFee * 0.18);
              const isExpanded = expandedReturnCardId === card.id;

              return (
                <React.Fragment key={card.id}>
                  <tr
                    onClick={() => onSelectCard(card)}
                    className={`transition-colors cursor-pointer group ${
                      isExpanded ? 'bg-blue-50/40' : 'bg-white hover:bg-blue-50/30'
                    }`}
                  >
                  {/* Rank */}
                  <td className="py-4 px-3 text-center font-black text-slate-400 group-hover:text-blue-600 transition">
                    {index + 1}
                  </td>

                  {/* Card Name & Bank */}
                  <td className="py-4 px-4">
                    <div className="font-extrabold text-slate-900 group-hover:text-blue-600 transition text-sm flex items-center space-x-1.5">
                      <span>{card.name}</span>
                      {card.tier === 'Super-Premium' && (
                        <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-300 text-[9px] font-black uppercase tracking-wider">
                          Metal
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 flex flex-wrap items-center gap-1.5 mt-0.5">
                      <span className="font-semibold text-slate-700">{card.bank}</span>
                      <span>•</span>
                      <span>{card.network}</span>
                      <span>•</span>
                      <span className="text-[10px] text-slate-400 font-mono">{card.tier}</span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold">
                        Min Spend: {card.isLTF ? '₹0 (LTF)' : card.feeWaiverSpend ? `₹${card.feeWaiverSpend >= 100000 ? `${(card.feeWaiverSpend / 100000).toFixed(card.feeWaiverSpend % 100000 === 0 ? 0 : 1)}L/yr` : `${card.feeWaiverSpend / 1000}k/yr`}` : 'No Waiver'}
                      </span>
                    </div>
                  </td>

                  {/* True Net Return Column (Highlighted) */}
                  <td className="py-4 px-4 bg-blue-50/40 border-x border-blue-100">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-blue-700 font-black text-sm tracking-tight">
                        {card.netReturnRate}
                      </span>
                      {card.returnStructure ? (
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
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
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Direct Cash
                        </span>
                      ) : null}
                    </div>

                    <div className="text-[10px] text-slate-700 font-medium leading-snug mt-1">
                      {card.netReturnSummary}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReturnBreakdown(card.id);
                      }}
                      className={`inline-flex items-center space-x-1 mt-2 px-2 py-0.5 rounded text-[10px] font-bold transition ${
                        expandedReturnCardId === card.id
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                      }`}
                    >
                      <Calculator className="w-2.5 h-2.5" />
                      <span>{expandedReturnCardId === card.id ? 'Hide Math' : 'Deconstruct Return'}</span>
                      {expandedReturnCardId === card.id ? (
                        <ChevronUp className="w-2.5 h-2.5 ml-0.5" />
                      ) : (
                        <ChevronDown className="w-2.5 h-2.5 ml-0.5" />
                      )}
                    </button>
                  </td>

                  {/* Bank Account Requirement Column */}
                  <td className="py-4 px-4 bg-slate-50/50">
                    {card.accountRequirement.isAccountNeeded ? (
                      <div className="space-y-0.5">
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-50 text-amber-900 border border-amber-200">
                          <Lock className="w-3 h-3 text-amber-600" />
                          <span>{card.accountRequirement.tierName}</span>
                        </span>
                        <div className="text-[10px] text-slate-600 leading-tight">
                          {card.accountRequirement.details}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Open to All</span>
                        </span>
                        <span className="text-[10px] text-slate-500 block mt-0.5">
                          No {card.bank} bank A/C needed
                        </span>
                      </div>
                    )}
                  </td>

                  {/* Annual Fee */}
                  <td className="py-4 px-4 font-bold">
                    {card.isLTF ? (
                      <span className="text-emerald-700 font-black">Lifetime Free</span>
                    ) : (
                      <div>
                        <span className="text-slate-900 font-extrabold">₹{card.annualFee.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-slate-500 block font-normal">+18% GST (₹{card.annualFee + gstFee})</span>
                      </div>
                    )}
                  </td>

                  {/* Minimum Spend Column */}
                  <td className="py-4 px-4 bg-amber-50/25 border-x border-amber-100">
                    {card.isLTF ? (
                      <div className="space-y-0.5">
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-900 border border-emerald-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>₹0 Min Spend</span>
                        </span>
                        <span className="text-[10px] text-slate-500 block font-semibold">Lifetime Free</span>
                      </div>
                    ) : card.feeWaiverSpend ? (
                      <div>
                        <div className="text-slate-900 font-black text-sm">
                          ₹{card.feeWaiverSpend >= 100000 
                            ? `${(card.feeWaiverSpend / 100000).toFixed(card.feeWaiverSpend % 100000 === 0 ? 0 : 1)} Lakhs` 
                            : `${(card.feeWaiverSpend / 1000).toFixed(0)}k`}
                        </div>
                        <span className="text-[10px] text-amber-800 font-bold block">
                          Annual fee waiver
                        </span>
                        <span className="text-[9px] text-slate-500 font-medium block">
                          ≈ ₹{Math.round(card.feeWaiverSpend / 12).toLocaleString('en-IN')}/mo
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-300">
                          No Fee Waiver
                        </span>
                        <span className="text-[10px] text-slate-500 block mt-0.5">
                          ₹{card.annualFee.toLocaleString('en-IN')} mandatory
                        </span>
                      </div>
                    )}
                  </td>

                  {/* Lounge Criteria & Min Spend */}
                  <td className="py-4 px-4">
                    {card.loungeAccess.domesticQuarterly > 0 ? (
                      <div>
                        <div className="flex items-center space-x-1 font-bold text-blue-700">
                          <Plane className="w-3.5 h-3.5" />
                          <span>
                            {card.loungeAccess.domesticQuarterly === 99
                              ? 'Unlimited'
                              : `${card.loungeAccess.domesticQuarterly}/qtr`}
                          </span>
                        </div>
                        <span className="text-[10px] block mt-1">
                          {card.loungeAccess.spendRequiredPreviousQuarter === 0 ? (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-black text-[9px]">
                              ⭐ ₹0 Min Spend
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200 font-bold text-[9px]">
                              Min ₹{card.loungeAccess.spendRequiredPreviousQuarter >= 1000 ? `${card.loungeAccess.spendRequiredPreviousQuarter / 1000}k` : card.loungeAccess.spendRequiredPreviousQuarter} qtr spend
                            </span>
                          )}
                        </span>
                      </div>
                    ) : (
                      <span className="text-slate-400">None</span>
                    )}
                  </td>

                  {/* RuPay UPI / Forex */}
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      {card.rupayUPI ? (
                        <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-700">
                          <QrCode className="w-3 h-3" />
                          <span>UPI ({card.upiRewardRate?.split(' ')[0] || 'Yes'})</span>
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[11px] block">No UPI</span>
                      )}

                      <div className="text-[11px]">
                        <span className="text-slate-500">Forex: </span>
                        <strong className={card.forexMarkup === 0 ? 'text-emerald-700' : 'text-slate-800'}>
                          {card.forexMarkup}%
                        </strong>
                      </div>
                    </div>
                  </td>

                  {/* Killer Perk */}
                  <td className="py-4 px-4 text-slate-800 font-medium leading-relaxed">
                    {card.bestFor}
                  </td>

                  {/* Exclusions to Watch */}
                  <td className="py-4 px-4 text-rose-700 text-[11px] leading-relaxed">
                    <div className="flex items-start space-x-1">
                      <Lock className="w-3 h-3 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span>{card.exclusions[0] || 'Standard exclusions'}</span>
                    </div>
                  </td>

                  {/* Welcome Bonus */}
                  <td className="py-4 px-4 text-slate-700 text-[11px] leading-relaxed">
                    <div className="flex items-start space-x-1">
                      <Award className="w-3 h-3 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{card.welcomeBonus}</span>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="py-4 px-4 text-right">
                    <button className="px-3 py-1.5 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-bold text-xs transition inline-flex items-center space-x-1 shadow-xs">
                      <span>Audit</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>

                {/* Expandable Return Math & Valuation Breakdown */}
                {isExpanded && (
                  <tr key={`${card.id}-return-expanded`} className="bg-blue-50/30 border-y-2 border-blue-400">
                    <td colSpan={12} className="p-5">
                      <div className="rounded-2xl bg-white border border-blue-200 p-5 space-y-4 shadow-md">
                        {/* Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                          <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                              <Coins className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
                                <span>Return Math & Value Architecture: {card.name}</span>
                                <span className="text-blue-700 font-mono text-xs">({card.netReturnRate})</span>
                              </h4>
                              <p className="text-[11px] text-slate-500">
                                How this return is unlocked in practice, realistic blended return, and redemption traps.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedReturnCardId(null);
                            }}
                            className="text-xs text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition"
                          >
                            Close Breakdown ✕
                          </button>
                        </div>

                        {/* 4-Pillar Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                          {/* 1. Base Everyday Swipe Rate */}
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                            <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">
                              1. Everyday Offline / POS Swipe
                            </span>
                            <div className="text-base font-black text-slate-900">
                              {card.returnStructure ? `${card.returnStructure.basePercent}% Base Rate` : card.rewardHighlights.baseRate.split('(')[0]}
                            </div>
                            <p className="text-[11px] text-slate-600 leading-snug">
                              What you earn on everyday offline physical store swipes or regular non-portal shopping.
                            </p>
                          </div>

                          {/* 2. Peak Accelerated Rate */}
                          <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200 space-y-1">
                            <span className="text-[10px] font-bold uppercase text-blue-700 tracking-wider flex items-center space-x-1">
                              <Sparkles className="w-3 h-3 text-blue-600" />
                              <span>2. Peak Multiplier / Portal</span>
                            </span>
                            <div className="text-base font-black text-blue-700">
                              {card.returnStructure ? `${card.returnStructure.maxPercent}% Peak Rate` : card.netReturnRate}
                            </div>
                            <p className="text-[11px] text-slate-700 leading-snug">
                              {card.returnStructure?.multiplierDetail || card.rewardHighlights.accelerated}
                            </p>
                          </div>

                          {/* 3. Point Valuation Reality */}
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                            <span className="text-[10px] font-bold uppercase text-slate-700 tracking-wider flex items-center space-x-1">
                              <Coins className="w-3 h-3 text-blue-600" />
                              <span>3. Point Valuation (Travel vs Cash)</span>
                            </span>
                            <div className="text-xs font-bold text-slate-900 space-y-0.5">
                              <div>✈️ Travel / Miles: <span className="text-blue-700">{card.returnStructure?.pointValueTravel || '1 pt = ₹1 on Travel'}</span></div>
                              <div>💵 Statement Cash: <span className="text-rose-600">{card.returnStructure?.pointValueCash || '₹0.20 - ₹0.30 (Avoid cash redemptions)'}</span></div>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-snug">
                              Never convert reward points to statement cash credit unless it is a pure cashback card.
                            </p>
                          </div>

                          {/* 4. Monthly Cap & Blacklist */}
                          <div className="p-3.5 rounded-xl bg-amber-50/40 border border-amber-200 space-y-1">
                            <span className="text-[10px] font-bold uppercase text-amber-800 tracking-wider flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 text-amber-600" />
                              <span>4. Monthly Caps & Rules</span>
                            </span>
                            <div className="text-xs font-extrabold text-amber-900">
                              {card.returnStructure?.monthlyCap || card.rewardHighlights.caps || 'Standard monthly cap applies'}
                            </div>
                            <p className="text-[10px] text-slate-600 leading-snug">
                              {card.returnStructure?.finePrintTrap || card.exclusions[0]}
                            </p>
                          </div>
                        </div>

                        {/* Minimum Spend Rules Highlight */}
                        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="flex items-center space-x-2">
                            <Coins className="w-4 h-4 text-amber-700 flex-shrink-0" />
                            <div>
                              <span className="font-extrabold text-amber-950">Minimum Spend Checklist: </span>
                              <span className="text-amber-900">
                                {card.isLTF 
                                  ? 'No minimum spend required — card is 100% Lifetime Free (₹0).' 
                                  : card.feeWaiverSpend 
                                  ? `Spend min. ₹${(card.feeWaiverSpend / 100000).toFixed(1)} Lakhs/year to waive the ₹${card.annualFee} fee (≈ ₹${Math.round(card.feeWaiverSpend / 12).toLocaleString('en-IN')}/mo).`
                                  : `Annual fee of ₹${card.annualFee} is mandatory (no fee waiver spend).`}
                              </span>
                            </div>
                          </div>
                          <div className="text-[11px] font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-300">
                            Lounge Gate: {card.loungeAccess.domesticQuarterly > 0 ? (card.loungeAccess.spendRequiredPreviousQuarter === 0 ? '₹0 Min Spend' : `Min. ₹${card.loungeAccess.spendRequiredPreviousQuarter.toLocaleString('en-IN')}/qtr`) : 'N/A'}
                          </div>
                        </div>

                        {/* Real-world Return Insight Box */}
                        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-start space-x-2.5 text-xs text-blue-950">
                          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold text-blue-900">Realistic Blended Return Insight: </span>
                            <span className="text-blue-900/90 leading-relaxed">
                              {card.id === 'hdfc-infinia'
                                ? 'No one gets 33.3% on all spends. If you spend ₹1,00,000/month (₹35k on flights/hotels/brand vouchers via SmartBuy + ₹65k general swipes), your realistic blended return is ~7.5% to 8.5% (approx ₹8,000/month net in free luxury travel), which is the highest in Asia.'
                                : card.id === 'sbi-cashback'
                                ? 'Pure, unadulterated 5% direct cashback credited to your statement every month. No points expiry, no flight redemption games. Max ₹5,000/month cashback on ₹1,00,000 online spends.'
                                : card.id === 'amex-plat-travel'
                                ? 'Milestone card: It gives a poor ~1% return if you spend ₹2 Lakhs, but spikes to ~11.5% net return (worth ~₹32,000 in Marriott Bonvoy / Taj stays) if you spend exactly ₹4 Lakhs in a card year.'
                                : `Blended annual return yields approximately ${card.netReturnSummary}. Always route high-ticket expenses through accelerated categories.`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
      {/* Table Header Bar */}
      <div className="p-5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-black text-slate-900">The Definitive Indian Credit Card Decision Matrix</h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
              Ranked by True Net Value
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Includes verified account relationship mandates, annual fee waivers, spend-based lounge criteria, and fine print exclusions.
          </p>
        </div>

        <div className="text-xs text-slate-600 font-medium">
          Showing <strong className="text-slate-900 font-bold">{cards.length}</strong> audited credit cards
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-4 px-3 text-center w-12">#</th>
              <th className="py-4 px-4 min-w-[210px]">Card & Bank</th>
              <th className="py-4 px-4 min-w-[190px] bg-blue-50/80 text-blue-900 border-x border-blue-100">
                <div className="flex items-center space-x-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  <span>Net Return & Est. Value</span>
                </div>
              </th>
              <th className="py-4 px-4 min-w-[170px] bg-slate-100/60 text-slate-800">
                <div className="flex items-center space-x-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-600" />
                  <span>Bank A/C Needed?</span>
                </div>
              </th>
              <th className="py-4 px-4 min-w-[125px]">Annual Fee</th>
              <th className="py-4 px-4 min-w-[155px] bg-amber-50/70 text-amber-950 border-x border-amber-200">
                <div className="flex items-center space-x-1.5">
                  <Coins className="w-3.5 h-3.5 text-amber-700" />
                  <span>Minimum Spend</span>
                </div>
                <div className="text-[9px] font-medium text-amber-700/80 normal-case tracking-normal">
                  Fee waiver requirement
                </div>
              </th>
              <th className="py-4 px-4 min-w-[175px]">Lounge & Min Spend</th>
              <th className="py-4 px-4 min-w-[140px]">RuPay UPI / Forex</th>
              <th className="py-4 px-4 min-w-[220px]">Killer Perk (Why It Wins)</th>
              <th className="py-4 px-4 min-w-[200px] text-rose-700">Exclusion Traps</th>
              <th className="py-4 px-4 min-w-[180px]">Welcome Milestone</th>
              <th className="py-4 px-4 text-right">Details</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-slate-700">
            {selectedTier === 'All' ? (
              tierSections.map((section) => {
                if (section.cards.length === 0) return null;
                return (
                  <React.Fragment key={section.key}>
                    {/* Tier Divider Section Header */}
                    <tr className={section.headerBg}>
                      <td colSpan={12} className="py-3 px-4 shadow-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center space-x-2.5">
                            <span className="text-sm sm:text-base font-black tracking-tight text-slate-900">
                              {section.title}
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${section.badgeClass}`}>
                              {section.badge}
                            </span>
                          </div>
                          <span className="text-xs text-slate-600 font-semibold hidden md:inline">
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
      <div className="p-4 border-t border-slate-200 bg-slate-50 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Every number and condition verified against bank Schedule of Charges & RBI MITC.</span>
        </span>
        <span className="text-slate-500 font-medium">Click any row to view complete exclusions and fine print.</span>
      </div>
    </div>
  );
};
