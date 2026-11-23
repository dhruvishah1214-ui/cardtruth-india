import React from 'react';
import type { CreditCard } from '../data/cards';
import { CardInsiderCard } from './CardInsiderCard';
import { MasterTable } from './MasterTable';
import { LayoutGrid, Table, ArrowUpDown, Scale, Sparkles } from 'lucide-react';

interface CardInsiderListingProps {
  cards: CreditCard[];
  viewMode: 'cards' | 'table';
  onViewModeChange: (mode: 'cards' | 'table') => void;
  sortBy: 'value' | 'fee-asc' | 'lounge-desc' | 'min-spend-asc';
  onSortByChange: (sort: 'value' | 'fee-asc' | 'lounge-desc' | 'min-spend-asc') => void;
  comparedCardIds: string[];
  onToggleCompare: (id: string) => void;
  onOpenCompare: () => void;
  onSelectCard: (card: CreditCard) => void;
  onCheckLounge?: (card: CreditCard) => void;
  selectedTier: 'All' | 'Beginner' | 'Mid-Tier' | 'Premium';
}

export const CardInsiderListing: React.FC<CardInsiderListingProps> = ({
  cards,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortByChange,
  comparedCardIds,
  onToggleCompare,
  onOpenCompare,
  onSelectCard,
  onCheckLounge,
  selectedTier,
}) => {
  return (
    <div className="space-y-5">
      {/* Listing Toolbar (Card Insider Style) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        {/* Left: Results Counter */}
        <div className="flex items-center space-x-2">
          <span className="font-extrabold text-sm sm:text-base text-slate-900">
            Showing {cards.length} Credit Cards
          </span>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            (Ranked by Value for Money)
          </span>
        </div>

        {/* Right: Sort & View Toggle Controls */}
        <div className="flex items-center space-x-2.5">
          {/* Sort Selector */}
          <div className="flex items-center space-x-1.5 bg-slate-100 rounded-xl px-2.5 py-1.5 border border-slate-200 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-400 font-semibold hidden md:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value as any)}
              className="bg-transparent font-bold text-slate-800 outline-none cursor-pointer text-xs"
            >
              <option value="value">⭐ Best Value for Money</option>
              <option value="fee-asc">💵 Lowest Annual Fee</option>
              <option value="lounge-desc">✈️ Most Airport Lounges</option>
              <option value="min-spend-asc">🎯 Lowest Spend to Make ₹0</option>
            </select>
          </div>

          {/* View Switcher Toggle */}
          <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200">
            <button
              onClick={() => onViewModeChange('cards')}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                viewMode === 'cards'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Card Insider Product Cards View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>

            <button
              onClick={() => onViewModeChange('table')}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                viewMode === 'table'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Compact Comparison Matrix Table"
            >
              <Table className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main View Mode */}
      {viewMode === 'cards' ? (
        <div className="space-y-4">
          {cards.map((card, index) => (
            <CardInsiderCard
              key={card.id}
              card={card}
              isTopValue={index === 0}
              isSelectedForCompare={comparedCardIds.includes(card.id)}
              onToggleCompare={onToggleCompare}
              onSelectCard={onSelectCard}
              onCheckLounge={onCheckLounge}
            />
          ))}

          {cards.length === 0 && (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-xl mb-3">
                🔍
              </div>
              <h3 className="text-base font-extrabold text-slate-900">No matching credit cards found</h3>
              <p className="text-xs text-slate-500 mt-1">Try resetting your filters or search terms.</p>
            </div>
          )}
        </div>
      ) : (
        <MasterTable
          cards={cards}
          selectedTier={selectedTier}
          onSelectCard={onSelectCard}
        />
      )}

      {/* Floating Sticky Compare Bar (Card Insider Style) */}
      {comparedCardIds.length > 0 && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white rounded-full px-5 py-3 shadow-2xl border border-slate-700 flex items-center space-x-4 animate-bounce-in max-w-[90vw]">
          <div className="flex items-center space-x-2">
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-bold">
              {comparedCardIds.length} {comparedCardIds.length === 1 ? 'card' : 'cards'} selected
            </span>
          </div>

          <button
            onClick={onOpenCompare}
            className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md transition flex items-center space-x-1"
          >
            <span>Compare Now</span>
            <Sparkles className="w-3 h-3 text-amber-300" />
          </button>
        </div>
      )}
    </div>
  );
};
