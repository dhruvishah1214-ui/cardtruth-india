import React from 'react';
import type { CreditCard } from '../data/cards';
import { Award, ArrowRight, ShieldCheck } from 'lucide-react';

interface BestCardsSpotlightProps {
  onSelectCard: (card: CreditCard) => void;
  cards: CreditCard[];
}

export const BestCardsSpotlight: React.FC<BestCardsSpotlightProps> = ({ onSelectCard, cards }) => {
  const hsbcLive = cards.find((c) => c.id === 'hsbc-live-plus');
  const sbiCashback = cards.find((c) => c.id === 'sbi-cashback');
  const indusindTiger = cards.find((c) => c.id === 'indusind-tiger');

  if (!hsbcLive || !sbiCashback || !indusindTiger) return null;

  const topPicks = [
    {
      card: hsbcLive,
      roleBadge: '🏆 #1 Cash King: Dining & Groceries',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      headlineReturn: '10% Direct Cashback',
      returnSubtext: 'Swiggy, Zomato, Blinkit, Zepto & Supermarkets',
      killerFeature: 'Pockets up to ₹12,000 liquid cash back in your statement annually.',
      accentBorder: 'hover:border-emerald-500'
    },
    {
      card: sbiCashback,
      roleBadge: '🛍️ #1 Heavyweight: All Online Shopping',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      headlineReturn: '5% Flat Direct Cashback',
      returnSubtext: 'Amazon, Flipkart, Myntra, Nykaa & Any E-Commerce',
      killerFeature: 'Unrestricted 5% statement credit without needing any points portal.',
      accentBorder: 'hover:border-blue-500'
    },
    {
      card: indusindTiger,
      roleBadge: '✈️ #1 Travel Pass: Int\'l & Domestic Lounge',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      headlineReturn: '10 Free Lounges (₹0 Spend)',
      returnSubtext: '2 International (Priority Pass) + 8 Domestic Lounges',
      killerFeature: 'Zero minimum spend hurdle—never get declined at airport lounge gates.',
      accentBorder: 'hover:border-purple-500'
    }
  ];

  return (
    <div className="mb-8 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 border-2 border-blue-200/90 rounded-3xl p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Best Credit Cards in India (The 2026 Trifecta)
            </h3>
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-200">
              Verified Optimal Portfolio
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Instead of searching for one mythical all-in-one card, combining these 3 cards delivers maximum cashback on daily expenses plus unconditional domestic & international lounge passes.
          </p>
        </div>

        <div className="text-xs text-slate-500 font-semibold flex items-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Curated for Sub-₹40k/mo Spenders</span>
        </div>
      </div>

      {/* 3 Best Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topPicks.map((pick) => {
          const c = pick.card;
          return (
            <div
              key={c.id}
              onClick={() => onSelectCard(c)}
              className={`bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition shadow-xs hover:shadow-md ${pick.accentBorder} group`}
            >
              <div>
                {/* Role Pill */}
                <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black border mb-3 ${pick.badgeColor}`}>
                  {pick.roleBadge}
                </span>

                {/* Card Name */}
                <h4 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition">
                  {c.name}
                </h4>
                <div className="text-[11px] text-slate-500 font-semibold mb-3">
                  {c.bank} • {c.network} • {c.tier}
                </div>

                {/* Core Highlight Box */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-3">
                  <div className="text-lg font-black text-blue-700 tracking-tight">
                    {pick.headlineReturn}
                  </div>
                  <div className="text-[11px] text-slate-700 font-medium mt-0.5 leading-snug">
                    {pick.returnSubtext}
                  </div>
                </div>

                {/* Key Benefit */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pick.killerFeature}
                </p>
              </div>

              {/* Bottom Metrics & Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">Annual Fee</span>
                  <span className="font-extrabold text-slate-900">
                    {c.isLTF ? 'Lifetime Free (₹0)' : `₹${c.annualFee.toLocaleString('en-IN')}`}
                  </span>
                </div>

                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-bold text-xs flex items-center space-x-1 transition shadow-xs"
                >
                  <span>Audit Card</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
