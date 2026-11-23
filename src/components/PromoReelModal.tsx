import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X } from 'lucide-react';

interface PromoReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromoReelModal: React.FC<PromoReelModalProps> = ({ isOpen, onClose }) => {
  const [currentSec, setCurrentSec] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalSec = 24;

  useEffect(() => {
    if (!isOpen) {
      setCurrentSec(0);
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isPlaying || !isOpen) return;
    const interval = setInterval(() => {
      setCurrentSec((prev) => {
        if (prev >= totalSec) {
          return 0; // loop
        }
        return prev + 0.1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  // Calculate current scene
  // Scene 1: 0 - 4s
  // Scene 2: 4 - 9s
  // Scene 3: 9 - 17s
  // Scene 4: 17 - 24s
  let sceneIndex = 1;
  if (currentSec >= 4 && currentSec < 9) sceneIndex = 2;
  else if (currentSec >= 9 && currentSec < 17) sceneIndex = 3;
  else if (currentSec >= 17) sceneIndex = 4;

  const progressPct = (currentSec / totalSec) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-sm sm:max-w-md h-[90vh] max-h-[820px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 flex flex-col font-sans select-none">
        
        {/* Top Floating Controls */}
        <div className="absolute top-4 left-4 right-4 z-40 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-black">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Kurzgesagt Style Reel</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Story Progress Bars */}
        <div className="absolute top-2 left-3 right-3 z-40 flex space-x-1.5">
          {[1, 2, 3, 4].map((s) => {
            let fill = 0;
            if (sceneIndex > s) fill = 100;
            else if (sceneIndex === s) {
              const startTimes = [0, 4, 9, 17, 24];
              const sceneDur = startTimes[s] - startTimes[s - 1];
              const elapsed = currentSec - startTimes[s - 1];
              fill = Math.min(100, Math.max(0, (elapsed / sceneDur) * 100));
            }
            return (
              <div key={s} className="flex-1 h-1 bg-white/25 rounded-full overflow-hidden">
                <div className="h-full bg-white transition-all duration-100" style={{ width: `${fill}%` }} />
              </div>
            );
          })}
        </div>

        {/* Animation Display Area */}
        <div className="flex-1 relative overflow-hidden flex flex-col justify-between">
          
          {/* SCENE 1: THE BAIT (0s - 4s) */}
          {sceneIndex === 1 && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B] via-[#1C2541] to-[#3A506B] flex flex-col justify-between p-6 pt-16 text-center animate-fadeIn">
              <div className="space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                  The Credit Card Illusion 💳
                </span>
                <h2 className="text-2xl font-black text-white leading-tight">
                  POV: You think you're gaming the banking system
                </h2>
              </div>

              {/* Shimmering Golden Bait Card */}
              <div className="my-auto mx-auto w-full max-w-[280px] h-[165px] rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-orange-500 p-4 text-white shadow-2xl shadow-orange-500/30 flex flex-col justify-between border-2 border-white/40 transform hover:scale-105 transition">
                <div className="flex justify-between items-center">
                  <div className="w-8 h-6 bg-amber-900 rounded-md border border-amber-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">ULTRA GOLD</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-slate-950 leading-none">5% CASHBACK!</div>
                  <div className="text-xs font-bold text-white mt-1">UNLIMITED LOUNGES ✈️</div>
                </div>
                <div className="flex justify-between text-[10px] font-mono opacity-90 text-slate-950 font-bold">
                  <span>•••• 2026</span>
                  <span>100% FREE PERKS</span>
                </div>
              </div>

              {/* Cute Duck with Sunglasses */}
              <div className="flex flex-col items-center">
                <div className="text-7xl animate-bounce">🦆🕶️</div>
                <div className="text-xs font-extrabold text-amber-200 mt-2">"I'm swimming in free flight points!"</div>
              </div>

              <div className="text-[11px] text-slate-300 font-semibold bg-slate-900/60 p-2.5 rounded-xl border border-white/10">
                🎙️ "Every year, millions swipe cards thinking they're beating the system..."
              </div>
            </div>
          )}

          {/* SCENE 2: THE TRAP (4s - 9s) */}
          {sceneIndex === 2 && (
            <div className="absolute inset-0 bg-radial from-[#590d22] via-[#2b0918] to-[#0d0106] flex flex-col justify-between p-6 pt-16 text-center animate-fadeIn">
              <div className="space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-rose-600 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-600/50 animate-pulse">
                  🚨 THE REALITY CHECK 🚨
                </span>
                <h2 className="text-2xl font-black text-white leading-tight">
                  "Card Declined: Minimum Spend Not Met"
                </h2>
              </div>

              {/* The Slamming Barrier */}
              <div className="my-auto mx-auto w-full bg-gradient-to-r from-amber-400 via-slate-900 to-amber-400 p-2 rounded-2xl border-2 border-white shadow-2xl">
                <div className="bg-rose-600 text-white py-3 px-4 rounded-xl text-sm font-black tracking-wider uppercase border border-white/50">
                  ❌ AIRPORT LOUNGE LOCKED
                </div>
              </div>

              {/* Fine Print Exclusions Bubble */}
              <div className="flex flex-col gap-2 max-w-xs mx-auto">
                <span className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-rose-500 text-rose-300 text-xs font-bold">
                  ⚠️ ₹50,000 Previous Quarter Spend Gate
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-rose-500 text-rose-300 text-xs font-bold">
                  ⛔ 0% Rewards on Rent, Fuel & Utilities
                </span>
              </div>

              {/* Shocked Duck */}
              <div className="flex flex-col items-center">
                <div className="text-7xl animate-pulse">🦆💥</div>
                <div className="text-xs font-extrabold text-rose-300 mt-2">Stranded at the gate in front of 50 people!</div>
              </div>

              <div className="text-[11px] text-slate-300 font-semibold bg-slate-900/60 p-2.5 rounded-xl border border-white/10">
                🎙️ "Until a silent fine print change leaves you rejected at the lounge."
              </div>
            </div>
          )}

          {/* SCENE 3: THE DECONSTRUCTION (9s - 17s) */}
          {sceneIndex === 3 && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#020617] to-[#0F172A] flex flex-col justify-between p-6 pt-16 text-center animate-fadeIn">
              <div className="space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-400/30">
                  CARDTRUTH INDIA 🇮🇳
                </span>
                <h2 className="text-2xl font-black text-white leading-tight">
                  We Deconstructed 59 Cards Into 3 Clear Tiers
                </h2>
              </div>

              {/* The 3 Tiers Stacks */}
              <div className="flex flex-col gap-2.5 my-auto max-w-xs mx-auto w-full text-left">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-md flex justify-between items-center">
                  <div>
                    <div className="text-xs font-black">🌱 Beginner & Starter</div>
                    <div className="text-[10px] opacity-90">₹0 Fee • RuPay UPI • LTF</div>
                  </div>
                  <span className="text-[10px] bg-slate-950 text-emerald-300 px-2 py-0.5 rounded-full font-black">22 Cards</span>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold shadow-md flex justify-between items-center border border-blue-400">
                  <div>
                    <div className="text-xs font-black">⚡ Mid-Tier & Lifestyle</div>
                    <div className="text-[10px] text-blue-100">5% Cashback • Dining Perks</div>
                  </div>
                  <span className="text-[10px] bg-blue-400 text-blue-950 px-2 py-0.5 rounded-full font-black">12 Cards</span>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold shadow-md flex justify-between items-center">
                  <div>
                    <div className="text-xs font-black">👑 Premium & Metal</div>
                    <div className="text-[10px] opacity-90">Unlimited Lounges + Guests</div>
                  </div>
                  <span className="text-[10px] bg-slate-950 text-amber-300 px-2 py-0.5 rounded-full font-black">25 Cards</span>
                </div>
              </div>

              {/* True Math Formula Box */}
              <div className="bg-slate-900 border border-sky-400 p-2.5 rounded-xl text-white text-xs font-bold text-center">
                <span>5% Base - 1.2% Exclusions = </span>
                <span className="text-amber-300 font-extrabold text-sm">3.3% True Net Return</span>
              </div>

              {/* Scientist Duck with Goggles */}
              <div className="flex flex-col items-center">
                <div className="text-6xl">🦆🔬</div>
                <div className="text-xs font-extrabold text-cyan-300 mt-1">Cold, hard mathematical truth.</div>
              </div>

              <div className="text-[11px] text-slate-300 font-semibold bg-slate-900/60 p-2.5 rounded-xl border border-white/10">
                🎙️ "Every card audited against RBI MITC rules. No bank sponsored BS."
              </div>
            </div>
          )}

          {/* SCENE 4: VIP EXIT & CTA (17s - 24s) */}
          {sceneIndex === 4 && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#1C1917] via-[#292524] to-[#44403C] flex flex-col justify-between p-6 pt-16 text-center animate-fadeIn">
              <div className="space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                  ✈️ NEVER GET DECLINED AGAIN
                </span>
                <h2 className="text-2xl font-black text-white leading-tight">
                  Know What Your Wallet Is Actually Worth
                </h2>
              </div>

              {/* Relaxed Duck Sipping Juice in Lounge */}
              <div className="my-auto flex flex-col items-center">
                <div className="text-8xl animate-bounce">🦆🍹✨</div>
                <div className="text-sm font-black text-amber-300 mt-2">Relaxing in the VIP Lounge!</div>
                <div className="text-xs text-slate-300 mt-1">Free flights • Zero Forex • Real returns</div>
              </div>

              {/* Big Pulsing CTA Button */}
              <div className="space-y-2">
                <a
                  href="https://speedy-fjord-679vq5j.tmp.now"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-base shadow-2xl shadow-blue-500/50 border-2 border-blue-400 transform hover:scale-105 transition"
                >
                  Audit Your Cards Free ➔
                </a>
                <div className="text-xs font-bold text-amber-300">
                  🔗 Link In Bio • 100% Free
                </div>
              </div>

              <div className="text-[11px] text-slate-300 font-semibold bg-slate-900/60 p-2.5 rounded-xl border border-white/10">
                🎙️ "Check all 59 cards right now before your next flight. Link in bio!"
              </div>
            </div>
          )}
        </div>

        {/* Bottom Playback & Scrubber Controls */}
        <div className="bg-slate-900 border-t border-slate-800 p-3.5 flex items-center justify-between z-40 text-xs text-white">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <div className="flex-1 mx-3 flex items-center space-x-2">
            <span className="font-mono text-[11px] text-slate-400">{Math.floor(currentSec)}s</span>
            <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="font-mono text-[11px] text-slate-400">24s</span>
          </div>

          <button
            onClick={() => setCurrentSec(0)}
            className="p-1.5 text-slate-400 hover:text-white transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
