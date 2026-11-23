import React, { useState, useMemo } from 'react';
import { X, Calculator, Trophy, ArrowRight } from 'lucide-react';
import { CREDIT_CARDS } from '../data/cards';
import type { CreditCard } from '../data/cards';

interface SpendCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCard: (card: CreditCard) => void;
}

export const SpendCalculatorModal: React.FC<SpendCalculatorModalProps> = ({
  isOpen,
  onClose,
  onSelectCard
}) => {
  const [ecommerceSpend, setEcommerceSpend] = useState<number>(15000);
  const [foodSpend, setFoodSpend] = useState<number>(5000);
  const [upiSpend, setUpiSpend] = useState<number>(10000);
  const [grocerySpend, setGrocerySpend] = useState<number>(6000);
  const [travelSpend, setTravelSpend] = useState<number>(5000);

  if (!isOpen) return null;

  const totalMonthlySpend = ecommerceSpend + foodSpend + upiSpend + grocerySpend + travelSpend;
  const annualSpend = totalMonthlySpend * 12;

  // Compute returns across cards
  const scoredCards = useMemo(() => {
    return CREDIT_CARDS.map((card) => {
      let annualEarnings = 0;

      // Card-specific heuristic calculations:
      if (card.id === 'hdfc-infinia') {
        // Infinia 3.3% base + up to 16.6% on flights/hotels via SmartBuy
        annualEarnings = (ecommerceSpend * 12 * 0.033) + (travelSpend * 12 * 0.166) + (foodSpend * 12 * 0.033);
      } else if (card.id === 'sbi-cashback') {
        // 5% on online shopping capped at 5000/mo
        const monthlyOnline = ecommerceSpend + foodSpend + grocerySpend;
        const monthlyCb = Math.min(monthlyOnline * 0.05, 5000);
        annualEarnings = monthlyCb * 12;
      } else if (card.id === 'hdfc-tata-neu-infinity') {
        // 1.5% UPI + 5% on Neu/BigBasket/Croma
        annualEarnings = (upiSpend * 12 * 0.015) + (grocerySpend * 12 * 0.05) + (ecommerceSpend * 12 * 0.03);
      } else if (card.id === 'ace-rupay-kreditpe') {
        // 3-5% on UPI
        const rate = upiSpend >= 10000 ? 0.05 : 0.03;
        annualEarnings = (upiSpend * 12 * rate) + (ecommerceSpend * 12 * 0.01);
      } else if (card.id === 'amazon-pay-icici') {
        // 5% uncapped on Amazon
        annualEarnings = (ecommerceSpend * 12 * 0.05) + (foodSpend * 12 * 0.02) + (upiSpend * 12 * 0.0);
      } else if (card.id === 'hdfc-swiggy') {
        // 10% on Swiggy + 5% online
        annualEarnings = (foodSpend * 12 * 0.10) + (ecommerceSpend * 12 * 0.05);
      } else if (card.id === 'airtel-axis') {
        // 10% on Swiggy/Zomato/BigBasket capped at ₹500/mo + 25% telecom
        annualEarnings = Math.min(foodSpend * 12 * 0.10, 6000) + Math.min(grocerySpend * 12 * 0.10, 3000) + 2000;
      } else {
        // Standard base rate
        annualEarnings = (annualSpend * 0.015);
      }

      // Check fee waiver
      const isFeeWaived = card.isLTF || (card.feeWaiverSpend ? annualSpend >= card.feeWaiverSpend : false);
      const effectiveFee = isFeeWaived ? 0 : card.annualFee * 1.18; // Fee + 18% GST
      const netSavings = Math.round(annualEarnings - effectiveFee);

      return {
        card,
        annualEarnings: Math.round(annualEarnings),
        netSavings,
        isFeeWaived
      };
    }).sort((a, b) => b.netSavings - a.netSavings);
  }, [ecommerceSpend, foodSpend, upiSpend, grocerySpend, travelSpend, annualSpend]);

  const topCard = scoredCards[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 text-slate-900 my-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-2.5 mb-4">
          <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">True Net Return Calculator</h2>
            <p className="text-xs text-slate-500">Calculates reward earnings minus annual fees & 18% GST</p>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-700">Online Shopping (Amazon/Flipkart)</span>
              <span className="text-blue-700 font-bold">₹{ecommerceSpend.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="2500"
              value={ecommerceSpend}
              onChange={(e) => setEcommerceSpend(Number(e.target.value))}
              className="w-full accent-blue-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-700">Food Delivery (Swiggy/Zomato)</span>
              <span className="text-blue-700 font-bold">₹{foodSpend.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="0"
              max="25000"
              step="1000"
              value={foodSpend}
              onChange={(e) => setFoodSpend(Number(e.target.value))}
              className="w-full accent-blue-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-700">Scan & Pay RuPay UPI</span>
              <span className="text-blue-700 font-bold">₹{upiSpend.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="0"
              max="30000"
              step="2000"
              value={upiSpend}
              onChange={(e) => setUpiSpend(Number(e.target.value))}
              className="w-full accent-blue-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-700">Groceries & Quick Commerce</span>
              <span className="text-blue-700 font-bold">₹{grocerySpend.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="0"
              max="30000"
              step="2000"
              value={grocerySpend}
              onChange={(e) => setGrocerySpend(Number(e.target.value))}
              className="w-full accent-blue-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div className="sm:col-span-2">
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-700">Flights, Hotels & Travel Spends</span>
              <span className="text-blue-700 font-bold">₹{travelSpend.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="2500"
              value={travelSpend}
              onChange={(e) => setTravelSpend(Number(e.target.value))}
              className="w-full accent-blue-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Total monthly & annual banner */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-blue-50 rounded-xl border border-blue-200 text-xs mb-5">
          <span className="text-slate-600">
            Monthly Spend: <strong className="text-slate-900 font-bold">₹{totalMonthlySpend.toLocaleString('en-IN')}</strong>
          </span>
          <span className="text-slate-600">
            Annual Spend: <strong className="text-blue-700 font-bold">₹{annualSpend.toLocaleString('en-IN')}</strong>
          </span>
        </div>

        {/* Winner Card Spotlight */}
        {topCard && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/50 border-2 border-blue-300 shadow-md mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-blue-600 text-white flex items-center space-x-1 shadow-xs">
                  <Trophy className="w-3 h-3" />
                  <span>#1 BEST MATCH FOR YOU</span>
                </span>
                <span className="text-xs text-blue-900 font-bold">{topCard.card.bank}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Est. Net Annual Return</span>
                <span className="text-lg font-black text-blue-700">
                  +₹{topCard.netSavings.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900">{topCard.card.name}</h3>
            <p className="text-xs text-slate-600 mt-1">{topCard.card.bestFor}</p>

            <div className="mt-3 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-600">
                Annual Fee:{' '}
                {topCard.card.isLTF ? (
                  <strong className="text-emerald-700 font-bold">Lifetime Free (₹0)</strong>
                ) : topCard.isFeeWaived ? (
                  <strong className="text-emerald-700 font-bold">₹0 (Waived on your spend!)</strong>
                ) : (
                  <strong className="text-slate-800">₹{topCard.card.annualFee} + 18% GST</strong>
                )}
              </span>

              <button
                onClick={() => {
                  onSelectCard(topCard.card);
                  onClose();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1 transition shadow-sm"
              >
                <span>View Full Perks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Top 3 Runners Up */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Other Strong Alternatives</h4>
          {scoredCards.slice(1, 4).map((entry, idx) => (
            <div
              key={entry.card.id}
              onClick={() => {
                onSelectCard(entry.card);
                onClose();
              }}
              className="p-3 bg-slate-50 hover:bg-blue-50/60 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer transition text-xs"
            >
              <div>
                <span className="font-bold text-slate-900 mr-2">#{idx + 2} {entry.card.name}</span>
                <span className="text-slate-500">({entry.card.bank})</span>
                <div className="text-[11px] text-slate-500 mt-0.5">{entry.card.cardType}</div>
              </div>
              <div className="text-right">
                <span className="font-bold text-blue-700">+₹{entry.netSavings.toLocaleString('en-IN')}/yr</span>
                <div className="text-[10px] text-slate-400">
                  {entry.card.isLTF ? 'Lifetime Free' : entry.isFeeWaived ? 'Fee Waived' : `₹${entry.card.annualFee} Fee`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
