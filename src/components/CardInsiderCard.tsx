import React from 'react';
import type { CreditCard } from '../data/cards';
import { CardVisual } from './CardVisual';
import { Star, ShieldCheck, CheckCircle2, Plane, Sparkles, ArrowRight, Award, Gem } from 'lucide-react';

interface CardInsiderCardProps {
  card: CreditCard;
  isTopValue?: boolean;
  isSelectedForCompare: boolean;
  onToggleCompare: (id: string) => void;
  onSelectCard: (card: CreditCard) => void;
  onCheckLounge?: (card: CreditCard) => void;
}

export const CardInsiderCard: React.FC<CardInsiderCardProps> = ({
  card,
  isTopValue = false,
  isSelectedForCompare,
  onToggleCompare,
  onSelectCard,
  onCheckLounge,
}) => {
  // Format Indian currency
  const formatINR = (val: number) => {
    if (val === 0) return '₹0';
    if (val >= 100000) return `₹${(val / 100000).toFixed(val % 100000 === 0 ? 0 : 1)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  // Determine mock rating based on net return score
  const rating = (4.0 + (card.netReturnValueScore / 100) * 0.9).toFixed(1);
  const reviewsCount = 120 + Math.floor(card.netReturnValueScore * 8.5);

  return (
    <div
      className={`relative bg-white rounded-3xl border transition-all duration-300 shadow-xs hover:shadow-xl hover:border-blue-400 overflow-hidden ${
        isSelectedForCompare
          ? 'ring-2 ring-blue-600 border-blue-500 bg-blue-50/20'
          : isTopValue
          ? 'border-amber-300 ring-1 ring-amber-200'
          : 'border-slate-200'
      }`}
    >
      {/* Top Value Banner Accent */}
      {isTopValue && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 px-4 py-1 text-xs font-black tracking-wide uppercase flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <Award className="w-3.5 h-3.5 fill-slate-950" />
            <span>#1 Top Value for Money in Category</span>
          </div>
          <span className="text-[10px] font-bold bg-slate-950/20 px-2 py-0.5 rounded-full">
            Highest Net Return
          </span>
        </div>
      )}

      <div className="p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left Column: Realistic Card Art + Compare & Rating */}
        <div className="flex flex-col items-center sm:items-start lg:items-center w-full lg:w-auto shrink-0">
          <CardVisual card={card} className="cursor-pointer" />

          {/* Rating & Reviews */}
          <div className="flex items-center justify-center space-x-2 mt-3 text-xs">
            <div className="flex items-center space-x-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md text-amber-900 font-extrabold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{rating}</span>
            </div>
            <span className="text-slate-400 text-[11px] font-medium">
              ({reviewsCount} reviews)
            </span>
          </div>

          {/* Compare Checkbox */}
          <label className="flex items-center space-x-2 mt-2.5 cursor-pointer select-none text-xs text-slate-700 font-semibold hover:text-blue-600 transition">
            <input
              type="checkbox"
              checked={isSelectedForCompare}
              onChange={() => onToggleCompare(card.id)}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 transition"
            />
            <span>Add to Compare</span>
          </label>
        </div>

        {/* Center Column: Card Details, Fee Box, & Key Perks */}
        <div className="flex-1 w-full space-y-3.5">
          {/* Badges & Meta */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              {card.bank} Bank
            </span>

            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
              {card.network} • {card.tier}
            </span>

            {card.isLTF && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center space-x-1">
                <span>🎁 100% Lifetime Free</span>
              </span>
            )}

            {card.accountRequirement.isAccountNeeded && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200 flex items-center space-x-1">
                <Gem className="w-3 h-3 text-purple-600" />
                <span>{card.accountRequirement.tierName}</span>
              </span>
            )}

            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 text-slate-500 border border-slate-200 flex items-center space-x-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>RBI Verified</span>
            </span>
          </div>

          {/* Title */}
          <div>
            <h3
              onClick={() => onSelectCard(card)}
              className="text-xl sm:text-2xl font-black text-slate-900 hover:text-blue-600 cursor-pointer transition leading-tight flex items-center gap-1.5"
            >
              <span>{card.name}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              {card.netReturnSummary}
            </p>
          </div>

          {/* Fee & Spend Waiver Box (Dead Simple 3-Box Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-slate-50 rounded-2xl p-3 border border-slate-200/80 text-xs">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Joining Fee</p>
              <p className="font-extrabold text-slate-800 text-sm mt-0.5">
                {card.joiningFee === 0 ? (
                  <span className="text-emerald-600">₹0 Free</span>
                ) : (
                  `₹${card.joiningFee.toLocaleString('en-IN')}`
                )}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Annual Fee</p>
              <p className="font-extrabold text-slate-800 text-sm mt-0.5">
                {card.isLTF || card.annualFee === 0 ? (
                  <span className="text-emerald-600">₹0 Free</span>
                ) : (
                  `₹${card.annualFee.toLocaleString('en-IN')}/yr`
                )}
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-[10px] uppercase font-bold text-slate-400">Spend to Make it ₹0</p>
              <p className="font-extrabold text-slate-800 text-sm mt-0.5">
                {card.isLTF ? (
                  <span className="text-emerald-600 font-bold">₹0 Always Free</span>
                ) : card.feeWaiverSpend ? (
                  <span className="text-blue-700">Spend {formatINR(card.feeWaiverSpend)}/yr</span>
                ) : (
                  <span className="text-slate-400 font-semibold">No Waiver</span>
                )}
              </p>
            </div>
          </div>

          {/* 3 Key Highlights (Card Insider Style) */}
          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">Reward Rate:</strong>{' '}
                {card.rewardHighlights.accelerated || `${card.netReturnRate} on general spends`}
              </span>
            </div>

            <div className="flex items-start space-x-2">
              <Plane className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">Airport Lounge:</strong>{' '}
                {card.loungeAccess.domesticQuarterly > 0 ? (
                  <>
                    {card.loungeAccess.domesticQuarterly} visits/qtr domestic{' '}
                    {card.loungeAccess.spendRequiredPreviousQuarter > 0 ? (
                      <span className="text-amber-700 font-semibold">
                        (requires {formatINR(card.loungeAccess.spendRequiredPreviousQuarter)}/qtr spend)
                      </span>
                    ) : (
                      <span className="text-emerald-600 font-semibold">(₹0 spend needed)</span>
                    )}
                  </>
                ) : (
                  <span className="text-slate-400">No complimentary domestic lounge</span>
                )}
              </span>
            </div>

            <div className="flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">Best For:</strong> {card.bestFor}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Net Annual Return + CTA Action Buttons */}
        <div className="w-full lg:w-48 shrink-0 flex flex-col justify-between items-center lg:items-end space-y-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-200">
          {/* Net Return Display */}
          <div className="text-center lg:text-right w-full">
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
              True Net Return
            </span>
            <div className="text-2xl font-black text-emerald-600 leading-tight">
              {card.netReturnRate}
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              After fees & exclusions
            </span>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-2">
            <button
              onClick={() => onSelectCard(card)}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition flex items-center justify-center space-x-1.5"
            >
              <span>View Card Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {onCheckLounge && card.loungeAccess.domesticQuarterly > 0 && (
              <button
                onClick={() => onCheckLounge(card)}
                className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] transition flex items-center justify-center space-x-1"
              >
                <Plane className="w-3 h-3 text-blue-600" />
                <span>Check Lounge Rule</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
