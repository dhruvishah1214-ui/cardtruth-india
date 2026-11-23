import React from 'react';
import type { CreditCard } from '../data/cards';
import { Wifi, Sparkles } from 'lucide-react';

interface CardVisualProps {
  card: CreditCard;
  className?: string;
}

export const CardVisual: React.FC<CardVisualProps> = ({ card, className = '' }) => {
  const { cardArt, bank, network, name, tier } = card;

  // Pattern overlays
  const getPatternBg = () => {
    switch (cardArt.pattern) {
      case 'brushed-metal':
        return 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)';
      case 'carbon-weave':
        return 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 70%)';
      case 'gold-foil':
        return 'linear-gradient(45deg, rgba(251,191,36,0.15) 0%, transparent 60%, rgba(245,158,11,0.2) 100%)';
      case 'aurora':
        return 'linear-gradient(120deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.2) 50%, transparent 100%)';
      default:
        return 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%)';
    }
  };

  return (
    <div
      className={`relative aspect-[1.586/1] w-full max-w-[240px] rounded-2xl p-4 shadow-xl border border-white/20 select-none overflow-hidden transition-transform duration-300 hover:scale-[1.03] ${className}`}
      style={{
        background: cardArt.bgGradient || 'linear-gradient(135deg, #1E293B, #0F172A)',
        color: cardArt.textColor || '#FFFFFF',
      }}
    >
      {/* Pattern texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: getPatternBg() }}
      />

      {/* Glossy sheen */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

      {/* Top Header: Bank & Contactless */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <span className="font-black text-xs tracking-wider uppercase opacity-90 drop-shadow-sm">
          {bank}
        </span>
        <div className="flex items-center space-x-1 opacity-80">
          <Wifi className="w-3.5 h-3.5 rotate-90" />
          {tier === 'Super-Premium' && (
            <Sparkles className="w-3 h-3 text-amber-300" />
          )}
        </div>
      </div>

      {/* EMV Chip */}
      <div className="relative z-10 w-8 h-6 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 border border-amber-300/80 shadow-xs mb-3 flex items-center justify-center">
        <div className="w-5 h-3.5 border border-amber-800/40 rounded-[2px] opacity-60 grid grid-cols-2 gap-0.5">
          <div className="border-r border-amber-800/40" />
          <div />
        </div>
      </div>

      {/* Bottom Area: Card Name & Network */}
      <div className="relative z-10 mt-auto flex items-end justify-between">
        <div className="max-w-[70%]">
          <p className="font-extrabold text-[12px] leading-tight drop-shadow-sm line-clamp-1">
            {name}
          </p>
          <p className="text-[9px] font-semibold opacity-70 uppercase tracking-widest mt-0.5">
            {tier}
          </p>
        </div>

        {/* Network Badge */}
        <div className="px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs border border-white/10 text-[9px] font-black tracking-wider uppercase">
          {network}
        </div>
      </div>
    </div>
  );
};
