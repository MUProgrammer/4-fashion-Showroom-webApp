import React from "react";
const CHECK = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 7 9 18l-5-5" />
  </svg>
);
const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-wine-dark">
      {/* Left decorative brand panel */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden text-white px-14 py-16 flex-col justify-center bg-[radial-gradient(circle_at_15%_18%,_#7A2740_0%,_#5C1A2B_48%,_#3E101C_100%)]">
        <div className="absolute w-[360px] h-[360px] rounded-full -top-[130px] -right-[110px] bg-white/[0.06]" />
        <div className="absolute w-[240px] h-[240px] rounded-full -bottom-[90px] -left-[70px] bg-[rgba(184,135,79,0.16)]" />

        <div className="relative z-10 w-[60px] h-[60px] rounded-2xl bg-gold flex items-center justify-center font-serif font-bold text-wine-dark text-2xl mb-7 shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
          4F
        </div>
        <h1 className="relative z-10 font-serif font-normal text-[33px] leading-[1.28] mb-3.5">
          Run your shop
          <br />
          like a boutique,
          <br />
          not a spreadsheet.
        </h1>
        <p className="relative z-10 text-[14.5px] text-white/70 max-w-[370px] leading-[1.75] mb-9">
          4 Fashion brings your inventory, sales, and team together in one calm,
          elegant workspace.
        </p>
        <ul className="relative z-10 flex flex-col gap-[17px] list-none p-0 m-0">
          {[
            "Real-time inventory across sizes & colors",
            "Role-based access for CEO, Admin & staff",
            "Clear, at-a-glance sales insights",
          ].map((text) => (
            <li
              key={text}
              className="flex items-center gap-[13px] text-[13.5px] text-white/90"
            >
              <span className="w-8 h-8 rounded-[10px] bg-white/[0.13] flex items-center justify-center flex-shrink-0">
                <span className="w-[15px] h-[15px]">{CHECK}</span>
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-[22px] py-10 bg-cream lg:bg-cream bg-[radial-gradient(circle_at_20%_20%,_#7A2740,_#5C1A2B_45%,_#3E101C_100%)] lg:bg-none min-h-screen w-full">
        <div className="relative w-full max-w-[380px] bg-white rounded-[20px] p-[40px_34px_32px] shadow-[0_10px_40px_rgba(92,26,43,0.12)] lg:shadow-[0_10px_40px_rgba(92,26,43,0.12)] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <div className="absolute top-0 left-0 right-0 h-[5px] rounded-t-[20px] bg-gradient-to-r from-wine to-gold" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
