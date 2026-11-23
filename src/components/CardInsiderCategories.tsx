import React from 'react';
import { Plane, ShoppingBag, Gift, Sparkles, QrCode, Award, Globe2, Layers } from 'lucide-react';

interface CardInsiderCategoriesProps {
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  selectedBank: string;
  onSelectBank: (bank: string) => void;
  totalCards: number;
}

export const CardInsiderCategories: React.FC<CardInsiderCategoriesProps> = ({
  activeCategory,
  onSelectCategory,
  selectedBank,
  onSelectBank,
  totalCards,
}) => {
  const categories = [
    {
      id: null,
      name: 'All Cards',
      desc: 'Complete Audited Directory',
      icon: Layers,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
    },
    {
      id: 'lounge-free',
      name: 'Travel & Lounge',
      desc: 'Complimentary Airport Visits',
      icon: Plane,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
    },
    {
      id: 'tier-mid',
      name: 'Cashback & Shopping',
      desc: 'Real 5% Online Cashback',
      icon: ShoppingBag,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
    },
    {
      id: 'ltf',
      name: 'Lifetime Free',
      desc: '₹0 Annual Fee Forever',
      icon: Gift,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
    {
      id: 'rupay-upi',
      name: 'RuPay UPI',
      desc: 'Scan & Pay QR with Credit',
      icon: QrCode,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
    },
    {
      id: 'tier-premium',
      name: 'Super-Premium',
      desc: 'Metal Cards & High Rewards',
      icon: Award,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
    },
    {
      id: 'zero-forex',
      name: 'Zero Forex',
      desc: '0% International Markup',
      icon: Globe2,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
    },
    {
      id: 'wealth-ltf',
      name: 'Wealth Accounts',
      desc: 'Premium LTF via Savings',
      icon: Sparkles,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
    },
  ];

  const banks = [
    'All',
    'HDFC',
    'SBI',
    'Axis',
    'ICICI',
    'Amex',
    'IndusInd',
    'Kotak',
    'IDFC FIRST',
    'AU Bank',
    'Yes Bank',
    'Federal Bank',
  ];

  return (
    <div className="space-y-6 mb-8">
      {/* 1. Category Quick Cards Grid (Card Insider Style) */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              Browse Credit Cards By Category
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Find the perfect card tailored to your spending habits
            </p>
          </div>
          <span className="text-xs font-bold text-slate-400">
            {totalCards} Audited Cards
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.id)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm text-slate-900'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 transition ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : `${cat.bg} ${cat.color}`
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-extrabold text-xs sm:text-[13px] leading-tight">
                    {cat.name}
                  </h4>
                  <p
                    className={`text-[10px] mt-0.5 line-clamp-1 ${
                      isActive ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    {cat.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Top Bank Issuers Selector (Card Insider Style) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3.5 shadow-xs">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider shrink-0 mr-1">
            Top Banks:
          </span>
          {banks.map((b) => {
            const isSelected = selectedBank === b;
            return (
              <button
                key={b}
                onClick={() => onSelectBank(b)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {b === 'All' ? 'All Banks' : `${b}`}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
