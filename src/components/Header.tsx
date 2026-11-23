import React, { useState } from 'react';
import { Share2, Sparkles, Check, Flame, Calculator, PlusCircle, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeaderProps {
  onOpenCalculator: () => void;
  onOpenLoungeChecker: () => void;
  onOpenDevaluations: () => void;
  onOpenSubmitUpdate?: () => void;
  onOpenReel?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCalculator,
  onOpenLoungeChecker,
  onOpenDevaluations,
  onOpenSubmitUpdate,
  onOpenReel
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 }
    });
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/95 border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-base shadow-sm">
            CT
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-lg tracking-tight text-slate-900">
                CardTruth<span className="text-blue-600 font-bold">.in</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                RBI MITC Verified
              </span>
            </div>
            <p className="text-[10px] text-slate-500 -mt-0.5 hidden sm:block font-medium">
              Zero-Hallucination Indian Credit Card Intelligence
            </p>
          </div>
        </div>

        {/* Quick Tools Navigation */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {onOpenReel && (
            <button
              onClick={onOpenReel}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-xs transition"
              title="Watch 36s Explainer Reel"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>36s Reel</span>
            </button>
          )}

          <button
            onClick={onOpenDevaluations}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition shadow-xs"
          >
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">Devaluation Watch</span>
            <span className="sm:hidden">Alerts</span>
          </button>

          <button
            onClick={onOpenLoungeChecker}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden md:inline">Lounge Checker</span>
            <span className="md:hidden">Lounge</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span className="font-bold">Net Return</span>
          </button>

          {onOpenSubmitUpdate && (
            <button
              onClick={onOpenSubmitUpdate}
              className="hidden lg:flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition"
              title="Report Bank Devaluation or Suggest Card"
            >
              <PlusCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Report Update</span>
            </button>
          )}

          {/* Share on Insta */}
          <button
            onClick={handleShare}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition"
            title="Copy link to bio"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-600" />
                <span className="hidden sm:inline">Share</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
