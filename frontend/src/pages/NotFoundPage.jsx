import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-10 text-center bg-[radial-gradient(circle_at_18%_20%,_#7A2740_0%,_#5C1A2B_42%,_#3E101C_100%)]">
      {/* decorative glows */}
      <div className="absolute w-[480px] h-[480px] rounded-full -top-44 -right-36 bg-white/5 blur-[2px]" />
      <div className="absolute w-[320px] h-[320px] rounded-full -bottom-36 -left-24 bg-gold/15 blur-[2px]" />
      <div className="absolute w-[200px] h-[200px] rounded-full top-1/5 left-[6%] bg-white/[0.04] blur-[2px]" />

      <div className="relative z-10 max-w-[520px]">
        {/* brand */}
        <div className="flex items-center justify-center gap-2.5 mb-11">
          <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center font-bold text-wine-dark text-[13px]">
            4F
          </div>
          <span className="text-base text-white tracking-wide font-serif">4 Fashion</span>
        </div>

        {/* illustration: open shoebox with a shoe */}
        <div className="w-[180px] h-[150px] mx-auto mb-8">
          <svg width="180" height="150" viewBox="0 0 180 150" fill="none">
            <ellipse cx="90" cy="134" rx="62" ry="8" fill="rgba(0,0,0,0.22)" />
            <path d="M34 74L90 50L146 74V70L90 46L34 70V74Z" fill="rgba(255,255,255,0.14)" />
            <path
              d="M28 78L90 54L152 78V118C152 121 149 124 146 124H34C31 124 28 121 28 118V78Z"
              fill="rgba(255,255,255,0.10)"
              stroke="rgba(227,196,143,0.55)"
              strokeWidth="1.5"
            />
            <path d="M28 78L90 100L152 78" stroke="rgba(227,196,143,0.65)" strokeWidth="1.5" fill="none" />
            <g>
              <path
                d="M58 96C58 96 62 84 78 82C90 80.5 96 84 106 88C112 90.3 118 90 122 92.5C126 95 126 100 120 101.5C108 104.5 66 104.5 60 101C57.5 99.5 57 98 58 96Z"
                fill="#FFFFFF"
              />
              <path d="M70 88C76 85.5 88 85.5 96 89" stroke="#5C1A2B" strokeWidth="3" strokeLinecap="round" />
              <ellipse cx="121" cy="96" rx="5" ry="7" fill="#E3C48F" />
            </g>
            <text
              x="90"
              y="34"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontStyle="italic"
              fontSize="30"
              fill="#E3C48F"
            >
              ?
            </text>
          </svg>
        </div>

        <div className="text-[11px] tracking-[2.5px] uppercase text-gold-light mb-3.5">Lost your step</div>

        <p className="font-serif text-[56px] sm:text-[72px] lg:text-[88px] leading-none text-white mb-3 tracking-wide">
          4<span className="text-gold-light italic">0</span>4
        </p>

        <h1 className="text-[20px] sm:text-[24px] lg:text-[26px] text-white font-normal mb-3.5">
          This page walked off the shelf.
        </h1>
        <p className="text-[14px] leading-[1.7] text-white/65 max-w-[400px] mx-auto mb-8">
          The page you're looking for doesn't exist, moved, or the link's a little worn out — like a shoelace that finally gave up.
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap mb-9">
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3
                       text-[13.5px] font-bold bg-gradient-to-br from-gold-light to-gold text-wine-dark
                       shadow-[0_10px_24px_rgba(184,135,79,0.32)] hover:-translate-y-0.5 transition"
          >
            Back to dashboard
          </button>
          <button
            onClick={() => navigate('/login')}
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3
                       text-[13.5px] font-bold border-[1.5px] border-white/30 text-white
                       hover:bg-white/10 transition"
          >
            Go to login
          </button>
        </div>

        <div className="flex gap-5 justify-center flex-wrap text-[12.5px] font-semibold">
          <button
            onClick={() => navigate('/invoices')}
            className="flex items-center gap-1.5 text-white/55 hover:text-white transition"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            Search invoices
          </button>
          <span className="w-px h-3 bg-white/20 self-center" />
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-1.5 text-white/55 hover:text-white transition"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            View reminders
          </button>
          <span className="w-px h-3 bg-white/20 self-center" />
          <button
            onClick={() => navigate('/contact')}
            className="flex items-center gap-1.5 text-white/55 hover:text-white transition"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Contact support
          </button>
        </div>
      </div>
    </div>
  );
}