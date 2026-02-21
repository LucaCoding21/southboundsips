"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setDone(true), 1800);
    const unmountTimer = setTimeout(() => setUnmounted(true), 2500);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (unmounted) return null;

  return (
    <>
      <style>{`
        /* ── Overlay ── */
        .loading-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #314E79;
          transform: translateY(0);
          transition: transform 0.65s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .loading-overlay.exit {
          transform: translateY(-100%);
        }

        /* ── Wordmark ── */
        .loading-word-southbound {
          font-family: var(--font-badhorse), serif;
          font-size: clamp(3.2rem, 11vw, 5.8rem);
          color: #ffffff;
          opacity: 0;
          transform: translateY(22px);
          animation: ls-fadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
          line-height: 1;
          letter-spacing: 0.04em;
        }
        .loading-word-sips {
          font-family: var(--font-badhorse), serif;
          font-size: clamp(2.2rem, 7.5vw, 4rem);
          color: #E57D37;
          opacity: 0;
          transform: translateY(16px);
          animation: ls-bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
          line-height: 1;
          letter-spacing: 0.08em;
        }

        /* ── Glass container ── */
        .loading-glass {
          margin: 20px 0 4px;
          opacity: 0;
          animation: ls-fadeUp 0.4s ease 0.4s forwards;
        }

        /* ── Liquid slides up from bottom of the V ── */
        .liquid-rise {
          transform: translateY(56px);
          animation: ls-liquidRise 1.2s cubic-bezier(0.25, 0.46, 0.35, 1) 0.55s forwards;
        }

        /* ── Gentle wave sway on top of liquid ── */
        .liquid-wave {
          animation: ls-waveSway 2s ease-in-out 0.9s infinite;
          transform-origin: center;
        }

        /* ── Bubbles ── */
        .ls-bubble {
          opacity: 0;
          animation: ls-bubbleFloat 1.4s ease-out forwards;
        }
        .ls-b1 { animation-delay: 0.8s; }
        .ls-b2 { animation-delay: 1.0s; }
        .ls-b3 { animation-delay: 1.15s; }
        .ls-b4 { animation-delay: 1.3s; }
        .ls-b5 { animation-delay: 0.9s; }

        /* ── Keyframes ── */
        @keyframes ls-fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ls-bounceIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ls-liquidRise {
          to { transform: translateY(0); }
        }
        @keyframes ls-waveSway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-3px); }
        }
        @keyframes ls-bubbleFloat {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          15% {
            opacity: 0.7;
            transform: translateY(-5px) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translateY(-32px) scale(1);
          }
        }
      `}</style>

      <div className={`loading-overlay${done ? " exit" : ""}`}>
        <div className="loading-word-southbound">Southbound</div>

        <svg
          className="loading-glass"
          width="72"
          height="94"
          viewBox="0 0 100 130"
          fill="none"
        >
          <defs>
            <clipPath id="gc">
              <path d="M17 22 L83 22 L50 76 Z" />
            </clipPath>
          </defs>

          {/* Liquid — clipped to glass interior, slides up */}
          <g clipPath="url(#gc)">
            <g className="liquid-rise">
              <rect x="10" y="20" width="80" height="58" fill="#E57D37" opacity="0.8" />
              {/* Wave crest riding the top of the liquid */}
              <path
                className="liquid-wave"
                d="M10 19 Q30 15 50 19 Q70 23 90 19 L90 22 L10 22 Z"
                fill="#E57D37"
                opacity="0.9"
              />
            </g>
            {/* Bubbles (clipped inside glass) */}
            <circle className="ls-bubble ls-b1" cx="42" cy="60" r="2" fill="rgba(255,255,255,0.5)" />
            <circle className="ls-bubble ls-b2" cx="58" cy="54" r="1.5" fill="rgba(255,255,255,0.45)" />
            <circle className="ls-bubble ls-b3" cx="50" cy="48" r="1.8" fill="rgba(255,255,255,0.4)" />
            <circle className="ls-bubble ls-b4" cx="46" cy="42" r="1.2" fill="rgba(255,255,255,0.35)" />
            <circle className="ls-bubble ls-b5" cx="54" cy="56" r="1" fill="rgba(255,255,255,0.4)" />
          </g>

          {/* Glass outline (V-shape martini) */}
          <path
            d="M15 20 L85 20 L50 78 Z"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Subtle glass shine */}
          <line
            x1="23" y1="24" x2="40" y2="60"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Stem */}
          <line x1="50" y1="78" x2="50" y2="106" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />

          {/* Base (gentle curve) */}
          <path
            d="M33 108 Q50 115 67 108"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div className="loading-word-sips">sips</div>
      </div>
    </>
  );
}
