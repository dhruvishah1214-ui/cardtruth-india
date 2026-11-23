import React, { useState } from 'react';
import { X, ShieldCheck, AlertTriangle, Plane, QrCode, Globe2, Share2, Check, Award, Lock, Building, CheckCircle2 } from 'lucide-react';
import type { CreditCard } from '../data/cards';
import confetti from 'canvas-confetti';

interface CardDetailModalProps {
  card: CreditCard | null;
  onClose: () => void;
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({ card, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!card) return null;

  const handleShare = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.2 }
    });
    const shareText = `Check out ${card.name} (${card.bank}) on CardTruth India!\nBest for: ${card.bestFor}\nBank A/C Needed: ${card.accountRequirement.isAccountNeeded ? card.accountRequirement.tierName : 'No (Open to all)'}\nFee: ${card.isLTF ? 'Lifetime Free (₹0)' : `₹${card.annualFee} + GST`}\nLounge: ${card.loungeAccess.domesticQuarterly > 0 ? `${card.loungeAccess.domesticQuarterly}/qtr` : 'None'}`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gstFee = Math.round(card.annualFee * 0.18);
  const totalFeeWithGst = card.annualFee + gstFee;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-7 text-slate-900 my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pr-8">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-blue-600 text-white">
              {card.bank}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
              {card.network}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
              {card.tier} Tier
            </span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{card.validityStatus.status} ({card.validityStatus.lastVerifiedDate})</span>
          </div>
        </div>

        {/* Card Name & Tagline */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{card.name}</h2>
        <p className="text-xs sm:text-sm text-blue-700 font-semibold mt-1 mb-4">
          ★ {card.bestFor}
        </p>

        {/* Bank Account Requirement Banner */}
        <div className={`mb-5 p-3.5 rounded-2xl border text-xs flex items-start space-x-2.5 ${
          card.accountRequirement.isAccountNeeded
            ? 'bg-amber-50 border-amber-200 text-amber-900'
            : 'bg-emerald-50 border-emerald-200 text-emerald-900'
        }`}>
          {card.accountRequirement.isAccountNeeded ? (
            <Building className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <span className="font-extrabold block text-sm">
              {card.accountRequirement.isAccountNeeded
                ? `Mandatory Relationship: ${card.accountRequirement.tierName}`
                : 'Open to All: No Bank Account Needed'}
            </span>
            <span className="text-xs opacity-90 mt-0.5 block leading-relaxed">
              {card.accountRequirement.details}
            </span>
          </div>
        </div>

        {/* True Net Return Highlight Box */}
        <div className="mb-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider block">
                True Net Return Rate
              </span>
              <span className="text-xl font-black text-blue-900">{card.netReturnRate}</span>
            </div>
            <div className="text-right text-xs text-slate-700 max-w-[60%] leading-relaxed font-medium">
              {card.netReturnSummary}
            </div>
          </div>

          {card.returnStructure && (
            <div className="pt-3 border-t border-blue-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
                <span className="text-[10px] text-slate-500 font-bold block">Base Everyday</span>
                <span className="font-extrabold text-slate-900">{card.returnStructure.basePercent}%</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-blue-200 shadow-xs">
                <span className="text-[10px] text-blue-700 font-bold block">Peak Accelerated</span>
                <span className="font-extrabold text-blue-700">{card.returnStructure.maxPercent}%</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs">
                <span className="text-[10px] text-blue-700 font-bold block">Point Travel Value</span>
                <span className="font-bold text-slate-800 text-[11px] truncate block">{card.returnStructure.pointValueTravel || '1 pt = ₹1'}</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-rose-200 shadow-xs">
                <span className="text-[10px] text-rose-700 font-bold block">Cash Value Trap</span>
                <span className="font-bold text-slate-800 text-[11px] truncate block">{card.returnStructure.pointValueCash || '₹0.20-₹0.30'}</span>
              </div>
            </div>
          )}
        </div>

        {/* Devaluation warning if any */}
        {card.validityStatus.devaluationAlert && (
          <div className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start space-x-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Recent Devaluation Notice: </span>
              {card.validityStatus.devaluationAlert}
            </div>
          </div>
        )}

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
          {/* Fee */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Annual Fee</span>
            {card.isLTF ? (
              <span className="text-sm sm:text-base font-extrabold text-emerald-700">Lifetime Free</span>
            ) : (
              <div>
                <span className="text-sm sm:text-base font-extrabold text-slate-900">₹{card.annualFee.toLocaleString('en-IN')}</span>
                <span className="text-[10px] text-slate-500 block">+18% GST (₹{totalFeeWithGst})</span>
              </div>
            )}
          </div>

          {/* Fee Waiver */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Fee Waiver Spend</span>
            {card.feeWaiverSpend ? (
              <span className="text-sm sm:text-base font-bold text-slate-900">
                ₹{(card.feeWaiverSpend / 100000).toFixed(1)} Lakhs/yr
              </span>
            ) : (
              <span className="text-xs sm:text-sm font-semibold text-slate-500">
                {card.isLTF ? 'Always Free' : 'No Waiver'}
              </span>
            )}
          </div>

          {/* Lounge Access */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block flex items-center space-x-1">
              <Plane className="w-3 h-3 text-blue-600" />
              <span>Lounge Access</span>
            </span>
            {card.loungeAccess.domesticQuarterly > 0 ? (
              <div>
                <span className="text-xs sm:text-sm font-extrabold text-blue-700">
                  {card.loungeAccess.domesticQuarterly === 99 ? 'Unlimited' : `${card.loungeAccess.domesticQuarterly}/qtr`}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {card.loungeAccess.spendRequiredPreviousQuarter === 0
                    ? '₹0 Min Spend!'
                    : `₹${(card.loungeAccess.spendRequiredPreviousQuarter / 1000)}k/qtr spend`}
                </span>
              </div>
            ) : (
              <span className="text-xs sm:text-sm text-slate-400 font-medium">None</span>
            )}
          </div>

          {/* Forex Markup */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-500 block flex items-center space-x-1">
              <Globe2 className="w-3 h-3 text-blue-600" />
              <span>Forex Markup</span>
            </span>
            <span className={`text-sm sm:text-base font-extrabold ${card.forexMarkup === 0 ? 'text-emerald-700' : 'text-slate-900'}`}>
              {card.forexMarkup}%
            </span>
            <span className="text-[10px] text-slate-500 block">
              {card.forexMarkup === 0 ? 'Zero Markup' : 'Standard Bank Rate'}
            </span>
          </div>
        </div>

        {/* Detailed Fine Print Breakdown */}
        <div className="space-y-4 max-h-[35vh] overflow-y-auto pr-1 text-xs">
          {/* RuPay UPI */}
          {card.rupayUPI && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start space-x-2.5">
              <QrCode className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-800">RuPay UPI Enabled: </span>
                <span className="text-slate-700">{card.upiRewardRate || 'Can be linked to BHIM/GPay/PhonePe for merchant scan & pay cashback.'}</span>
              </div>
            </div>
          )}

          {/* Welcome Bonus & Milestones */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2.5 flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Welcome Gifts & Spend Milestones</span>
            </h4>
            <div className="space-y-1.5 text-slate-700 leading-relaxed">
              <div className="flex items-start space-x-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Welcome Gift:</strong> {card.welcomeBonus}</span>
              </div>
              {card.keyMilestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start space-x-1.5">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reward Highlights */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2">
              Reward Multipliers & Accelerators
            </h4>
            <div className="space-y-1 text-slate-700 leading-relaxed">
              <p><strong>Base Rate:</strong> {card.rewardHighlights.baseRate}</p>
              <p><strong>Accelerated:</strong> {card.rewardHighlights.accelerated}</p>
              {card.rewardHighlights.caps && (
                <p className="text-amber-800 font-medium"><strong>Points Cap:</strong> {card.rewardHighlights.caps}</p>
              )}
            </div>
          </div>

          {/* Exclusions & Fine Print */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2 text-rose-700 flex items-center space-x-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Exclusions & Surcharges (Fine Print)</span>
            </h4>
            <ul className="space-y-1 text-slate-600">
              {card.exclusions.map((exc, idx) => (
                <li key={idx} className="flex items-start space-x-1.5">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[11px] text-slate-500 pt-1">
            <span>Verified Source: </span>
            <span className="text-slate-600 font-mono">{card.validityStatus.mitcRef}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handleShare}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-xs flex items-center space-x-1.5 transition border border-slate-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied Summary!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-slate-500" />
                <span>Share Card Details</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-500/20"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
