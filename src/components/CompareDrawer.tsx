import React from 'react';
import { X, Scale, Check, Minus } from 'lucide-react';
import type { CreditCard } from '../data/cards';

interface CompareDrawerProps {
  selectedCards: CreditCard[];
  onRemoveCard: (id: string) => void;
  onClearAll: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  selectedCards,
  onRemoveCard,
  onClearAll,
  isOpen,
  onClose
}) => {
  if (!isOpen || selectedCards.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-7 text-slate-900 my-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <Scale className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Side-by-Side Comparison</h2>
            <span className="text-xs text-slate-500">({selectedCards.length} cards selected)</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClearAll}
              className="text-xs text-slate-500 hover:text-rose-600 font-medium transition"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-3 px-3 text-slate-600 font-semibold w-40">Factor</th>
                {selectedCards.map((card) => (
                  <th key={card.id} className="py-3 px-3 min-w-[200px]">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">{card.name}</span>
                        <span className="text-[10px] text-slate-500 font-normal">{card.bank} • {card.network}</span>
                      </div>
                      <button
                        onClick={() => onRemoveCard(card.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {/* Annual Fee */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-500">Annual Fee</td>
                {selectedCards.map((card) => (
                  <td key={card.id} className="py-3 px-3 font-bold">
                    {card.isLTF ? (
                      <span className="text-emerald-700">Lifetime Free (₹0)</span>
                    ) : (
                      <span className="text-slate-900">₹{card.annualFee} + 18% GST</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Fee Waiver Spend */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-500">Fee Waiver Spend</td>
                {selectedCards.map((card) => (
                  <td key={card.id} className="py-3 px-3 text-slate-800">
                    {card.isLTF ? 'Always Free' : card.feeWaiverSpend ? `₹${(card.feeWaiverSpend / 100000).toFixed(1)} Lakhs/yr` : 'No Waiver'}
                  </td>
                ))}
              </tr>

              {/* Lounge Access & Criteria */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-500">Lounge Access Criteria</td>
                {selectedCards.map((card) => (
                  <td key={card.id} className="py-3 px-3">
                    {card.loungeAccess.domesticQuarterly > 0 ? (
                      <div>
                        <span className="text-blue-700 font-bold block">
                          {card.loungeAccess.domesticQuarterly === 99 ? 'Unlimited' : `${card.loungeAccess.domesticQuarterly}/qtr`}
                        </span>
                        <span className="text-[10px] text-slate-500 block mt-0.5">
                          {card.loungeAccess.spendRequiredPreviousQuarter === 0
                            ? '⭐ ₹0 Min Spend!'
                            : `Requires ₹${(card.loungeAccess.spendRequiredPreviousQuarter / 1000)}k prev quarter spend`}
                        </span>
                      </div>
                    ) : (
                      <span className="text-slate-400">None</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* RuPay UPI */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-500">RuPay UPI Enabled</td>
                {selectedCards.map((card) => (
                  <td key={card.id} className="py-3 px-3">
                    {card.rupayUPI ? (
                      <span className="text-emerald-700 font-bold flex items-center space-x-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Yes ({card.upiRewardRate || 'Base rewards'})</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 flex items-center space-x-1">
                        <Minus className="w-3.5 h-3.5" />
                        <span>No</span>
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Forex Markup */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-500">Forex Markup Fee</td>
                {selectedCards.map((card) => (
                  <td key={card.id} className="py-3 px-3 font-bold">
                    <span className={card.forexMarkup === 0 ? 'text-emerald-700' : 'text-slate-900'}>
                      {card.forexMarkup}%
                    </span>
                  </td>
                ))}
              </tr>

              {/* Best For */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-500">Best Suited For</td>
                {selectedCards.map((card) => (
                  <td key={card.id} className="py-3 px-3 text-slate-800 font-medium leading-relaxed">
                    {card.bestFor}
                  </td>
                ))}
              </tr>

              {/* Welcome Bonus */}
              <tr>
                <td className="py-3 px-3 font-semibold text-slate-500">Welcome Bonus</td>
                {selectedCards.map((card) => (
                  <td key={card.id} className="py-3 px-3 text-slate-700">
                    {card.welcomeBonus}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition shadow-sm"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
