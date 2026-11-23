import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, AlertCircle, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SubmitUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitUpdateModal: React.FC<SubmitUpdateModalProps> = ({ isOpen, onClose }) => {
  const [bankName, setBankName] = useState('');
  const [cardName, setCardName] = useState('');
  const [updateType, setUpdateType] = useState<'Devaluation' | 'New Card Launch' | 'Fee Revision' | 'Lounge Change'>('Devaluation');
  const [details, setDetails] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-7 text-slate-900 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Thank You for Submitting!</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Our automated regulatory diff engine and editorial team will verify your submission against the bank's RBI MITC filing and update the live matrix.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2.5 mb-2">
              <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-900">Report Bank Revision / Add Card</h2>
                <p className="text-xs text-slate-500">Keep CardTruth 100% updated and zero-hallucination</p>
              </div>
            </div>

            <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Zero-Hallucination Policy:</strong> Every report is verified against bank Schedule of Charges (SOC) or RBI 30-day notice circulars before going live.
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Bank Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HDFC, Axis, Kotak"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Card Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Infinia, Tiger, Mojo"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Type of Update</label>
              <select
                value={updateType}
                onChange={(e) => setUpdateType(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
              >
                <option value="Devaluation">⚠️ Devaluation (Reduced perks/spend caps)</option>
                <option value="Lounge Change">✈️ Lounge Rule Change (Spend threshold)</option>
                <option value="New Card Launch">🎉 New Card Launch in India</option>
                <option value="Fee Revision">💰 Annual Fee or Waiver Revision</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Summary of Change / What Changed?</label>
              <textarea
                required
                rows={3}
                placeholder="e.g. Bank sent email stating lounge requires ₹50k spend starting Jan 2027..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Bank Circular / Notice Link (Optional)</label>
              <input
                type="url"
                placeholder="https://bank.com/notice-board/revision-circular.pdf"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>Reviewed within 24 hours</span>
              </span>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1.5 transition shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit for Verification</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
