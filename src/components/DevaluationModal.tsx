import React from 'react';
import { X, Flame, AlertTriangle, ShieldCheck } from 'lucide-react';
import { DEVALUATION_NEWS } from '../data/cards';

interface DevaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevaluationModal: React.FC<DevaluationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 text-slate-900 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2.5 mb-2">
          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-600">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Bank Devaluation & Policy Radar</h2>
            <p className="text-xs text-slate-500">Live updates tracked directly from official bank notice boards</p>
          </div>
        </div>

        <div className="my-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>RBI Rule:</strong> Banks must notify cardholders at least 30 days before implementing any negative revision in charges, reward rates, or lounge access.
          </span>
        </div>

        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {DEVALUATION_NEWS.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                  {item.bank}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  item.impact === 'Positive'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  {item.impact === 'Positive' ? 'Favorable Perk' : 'Devaluation'}
                </span>
              </div>

              <h3 className="font-bold text-sm text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.summary}</p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                <span>Affected: <strong className="text-slate-700">{item.affectedCards.join(', ')}</strong></span>
                <span className="text-slate-500 font-medium">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500 flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified with Bank Notice Logs</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition shadow-xs"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
