import React, { useState } from 'react';
import { X, Plane, AlertTriangle, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { CREDIT_CARDS } from '../data/cards';
import type { CreditCard } from '../data/cards';

interface LoungeCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCard?: (card: CreditCard) => void;
}

export const LoungeCheckerModal: React.FC<LoungeCheckerModalProps> = ({
  isOpen,
  onClose,
  onSelectCard
}) => {
  const [selectedCardId, setSelectedCardId] = useState<string>('indusind-tiger');
  const [previousQuarterSpend, setPreviousQuarterSpend] = useState<number>(30000);

  if (!isOpen) return null;

  const selectedCard = CREDIT_CARDS.find((c) => c.id === selectedCardId) || CREDIT_CARDS[0];
  const requiredSpend = selectedCard.loungeAccess.spendRequiredPreviousQuarter;
  const isEligible = previousQuarterSpend >= requiredSpend;
  const hasLounge = selectedCard.loungeAccess.domesticQuarterly > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 text-slate-900 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center space-x-2.5 mb-2">
          <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
            <Plane className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Airport Lounge Eligibility Checker</h2>
            <p className="text-xs text-slate-500">Avoid airport terminal declines due to spend rules</p>
          </div>
        </div>

        <div className="my-5 space-y-4">
          {/* Card Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Select Your Credit Card
            </label>
            <select
              value={selectedCardId}
              onChange={(e) => setSelectedCardId(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none"
            >
              {CREDIT_CARDS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.bank}) {c.loungeAccess.domesticQuarterly > 0 ? '✈️ Has Lounge' : '❌ No Lounge'}
                </option>
              ))}
            </select>
          </div>

          {/* Spend Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Your Total Spend in Previous Calendar Quarter (3 months)
              </label>
              <span className="text-xs font-bold text-blue-700">
                ₹{previousQuarterSpend.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={previousQuarterSpend}
              onChange={(e) => setPreviousQuarterSpend(Number(e.target.value))}
              className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>₹0</span>
              <span>₹25,000</span>
              <span>₹50,000</span>
              <span>₹1,00,000+</span>
            </div>
          </div>

          {/* Result Card */}
          <div className="pt-2">
            {!hasLounge ? (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900">
                <div className="flex items-center space-x-2 font-bold text-sm">
                  <ShieldAlert className="w-5 h-5 text-red-600" />
                  <span>No Complimentary Lounge Access</span>
                </div>
                <p className="text-xs text-red-800 mt-1">
                  {selectedCard.name} does not offer complimentary domestic or international airport lounge visits.
                </p>
              </div>
            ) : isEligible ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <div className="flex items-center space-x-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Lounge Access UNLOCKED! 🎉</span>
                </div>
                <p className="text-xs text-emerald-800 mt-1">
                  You are eligible for <strong>{selectedCard.loungeAccess.domesticQuarterly === 99 ? 'Unlimited' : `${selectedCard.loungeAccess.domesticQuarterly} visits/quarter`}</strong>.
                  {requiredSpend === 0 ? (
                    <span className="block text-emerald-700 font-semibold mt-0.5">
                      ⭐ This card has ₹0 spend criteria! No minimum spend needed.
                    </span>
                  ) : (
                    <span className="block mt-0.5">
                      Required criteria: ₹{requiredSpend.toLocaleString('en-IN')} (You spent ₹{previousQuarterSpend.toLocaleString('en-IN')}).
                    </span>
                  )}
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                <div className="flex items-center space-x-2 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span>Access DECLINED at Terminal ⚠️</span>
                </div>
                <p className="text-xs text-amber-800 mt-1">
                  You spent ₹{previousQuarterSpend.toLocaleString('en-IN')}, but {selectedCard.name} mandates a minimum spend of{' '}
                  <strong className="text-slate-900">₹{requiredSpend.toLocaleString('en-IN')}</strong> in the previous calendar quarter.
                </p>
                <div className="mt-2 text-xs font-semibold text-amber-800">
                  Shortfall: ₹{(requiredSpend - previousQuarterSpend).toLocaleString('en-IN')} needed.
                </div>
              </div>
            )}
          </div>

          {/* Highlight note about IndusInd Tiger */}
          {selectedCard.id !== 'indusind-tiger' && (
            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-200 text-xs text-slate-700 flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Pro Tip: </span>
                Cards like <strong>IndusInd Tiger</strong> give 8 domestic + 2 international visits per year with <span className="text-blue-700 font-bold">₹0 spend requirement</span>.
              </div>
            </div>
          )}
        </div>

        <div className="pt-2 flex justify-between items-center">
          {onSelectCard && (
            <button
              onClick={() => {
                onSelectCard(selectedCard);
                onClose();
              }}
              className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition"
            >
              View Full Card Details →
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
