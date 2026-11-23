import React from 'react';
import { Search, Plane, QrCode, Globe2, Gift, Sparkles, Layers, Award, Play } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeQuickFilter: string | null;
  onSelectQuickFilter: (filter: string | null) => void;
  onOpenReel?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  activeQuickFilter,
  onSelectQuickFilter,
  onOpenReel
}) => {
  const curatedDecks = [
    { id: 'best-cards', label: '⭐ Best Cards (Top Picks)', icon: Award },
    { id: 'tier-beginner', label: '🌱 Beginner (₹0–500)', icon: Sparkles },
    { id: 'tier-mid', label: '⚡ Mid-Tier (₹500–3k)', icon: Layers },
    { id: 'tier-premium', label: '👑 Premium & Metal', icon: Award },
    { id: null, label: 'All Audited Cards', icon: Layers },
    { id: 'lounge-free', label: '₹0 Spend Lounge', icon: Plane },
    { id: 'zero-forex', label: '0% Forex Markup', icon: Globe2 },
    { id: 'rupay-upi', label: 'RuPay UPI', icon: QrCode },
    { id: 'ltf', label: 'Lifetime Free', icon: Gift },
  ];

  return (
    <div className="relative pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-gradient-to-b from-blue-50/60 via-white to-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Verification Status Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-blue-200/80 text-blue-900 mb-5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="text-slate-500">Live Regulatory Audit:</span>
          <span className="text-blue-700 font-bold">November 2026 Bank Schedules</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
          The Unfiltered Truth Behind <span className="text-blue-600">Indian Credit Cards</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed font-normal">
          Every fine print exclusion, quarterly lounge spend rule, and hidden fee waiver threshold—verified directly from bank regulatory filings, not AI guesswork.
        </p>

        {/* Watch Explainer Reel CTA */}
        {onOpenReel && (
          <div className="flex items-center justify-center mb-7">
            <button
              onClick={onOpenReel}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 border border-slate-700/60"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-emerald-400" />
              </div>
              <span>Watch 36s Explainer Reel</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                NEW
              </span>
            </button>
          </div>
        )}

        {/* High-Contrast Search Input */}
        <div className="relative max-w-xl mx-auto mb-3">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4 text-blue-600" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by card name, bank, or perk (e.g. Infinia, Cashback, Atlas)..."
            className="w-full pl-11 pr-16 py-3.5 bg-white text-slate-900 placeholder-slate-400 rounded-2xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none text-sm transition shadow-sm font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Trending Searches (Card Insider Style) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-500 mb-4">
          <span className="font-bold text-slate-400 text-[11px] mr-1">Trending:</span>
          {['Infinia', 'SBI Cashback', 'Axis Atlas', 'Scapia', 'Tata Neu', 'Sapphiro'].map((tag) => (
            <button
              key={tag}
              onClick={() => onSearchChange(tag)}
              className="px-2.5 py-0.5 rounded-full bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-700 border border-slate-200 text-[11px] font-semibold transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Curated Decks Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {curatedDecks.map((deck) => {
            const Icon = deck.icon;
            const isSelected = activeQuickFilter === deck.id;
            return (
              <button
                key={deck.label}
                onClick={() => onSelectQuickFilter(deck.id)}
                className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition duration-200 border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-300 shadow-xs'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                <span>{deck.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
