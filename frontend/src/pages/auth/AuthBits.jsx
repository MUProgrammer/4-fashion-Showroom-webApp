import React from 'react';

export function AuthBrand() {
  return (
    <div className="flex items-center gap-3 mb-1.5 justify-center">
      <div className="w-[46px] h-[46px] rounded-[13px] bg-gold flex items-center justify-center font-serif font-bold text-wine-dark text-xl shadow-[0_6px_16px_rgba(184,135,79,0.35)]">
        4F
      </div>
      <div className="font-serif text-[23px] text-wine-dark">4 Fashion</div>
    </div>
  );
}

export function AuthTitle({ children }) {
  return <h3 className="font-serif text-[19px] text-wine-dark mb-[18px] text-center">{children}</h3>;
}

export function AuthError({ message }) {
  if (!message) return null;
  return (
    <div className="bg-danger-bg text-danger text-[12.5px] font-semibold px-3 py-2.5 rounded-lg mb-3.5">{message}</div>
  );
}

export function AuthSwitch({ children }) {
  return <p className="text-center text-[12.5px] text-muted mt-3.5">{children}</p>;
}

export function AuthLink({ onClick, children }) {
  return (
    <a onClick={onClick} className="text-wine font-semibold cursor-pointer hover:underline">
      {children}
    </a>
  );
}

export function IconField({ icon, label, htmlFor, children }) {
  return (
    <div className="mb-3.5">
      <label htmlFor={htmlFor} className="block text-[12.5px] text-muted mb-1.5 font-semibold">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none [&:has(+input:focus)]:text-wine">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}

export const ICONS = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  ),
};

export function inputClass() {
  return 'w-full pl-[37px] pr-3 py-[9px] border-[1.5px] border-line rounded-lg text-sm bg-[#fffdfb] text-charcoal focus:outline-none focus:border-wine-light focus:shadow-[0_0_0_3px_rgba(92,26,43,0.1)]';
}

export function StepDots({ steps, current }) {
  // steps: array of {label}, current: 1-based index of current step, values below current are "done"
  return (
    <div className="flex items-center justify-center gap-1.5 mb-6">
      {steps.map((s, i) => {
        const stepNum = i + 1;
        const done = stepNum < current;
        const isCurrent = stepNum === current;
        return (
          <React.Fragment key={s}>
            {i > 0 && <div className={'w-[26px] h-0.5 ' + (stepNum - 1 < current ? 'bg-wine' : 'bg-[#E6DAD3]')} />}
            <div className="flex items-center gap-1.5">
              <div
                className={
                  'w-[26px] h-[26px] rounded-full text-xs font-bold flex items-center justify-center transition-all ' +
                  (done
                    ? 'bg-wine text-white'
                    : isCurrent
                    ? 'bg-wine-dark text-white scale-[1.08] shadow-[0_0_0_4px_rgba(92,26,43,0.15)]'
                    : 'bg-[#E6DAD3] text-muted')
                }
              >
                {done ? '✓' : stepNum}
              </div>
              <div
                className={
                  'text-[10.5px] uppercase tracking-[.5px] ' +
                  (done || isCurrent ? 'text-wine-dark' : 'text-muted') +
                  (isCurrent ? ' font-bold' : '')
                }
              >
                {s}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
