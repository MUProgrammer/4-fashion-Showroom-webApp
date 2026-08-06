import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  function greeting() {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  }
  const navigate = useNavigate();
//   const name = localStorage.getItem("userName") || "Guest";
  const [greet, setGreet] = useState(greeting());
  const [name, setName] = useState("");
  useEffect(() => {
    const raw = localStorage.getItem("userInfo"); // <-- same key used at login
    if (!raw) {
      navigate("/login", { replace: true });
      return;
    }
    const userInfo = JSON.parse(raw);
    setName(userInfo.username || userInfo.user?.username || "there");
  }, [navigate]);

  
  useEffect(() => {
    setGreet(greeting());
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_22%_20%,_#7A2740_0%,_#5C1A2B_45%,_#3E101C_100%)] px-5 py-10">
      {/* soft decorative glow shapes */}
      <div className="absolute w-[460px] h-[460px] rounded-full -top-40 -right-[120px] bg-white/[0.05] blur-[2px]" />
      <div className="absolute w-[320px] h-[320px] rounded-full -bottom-[110px] -left-[90px] bg-[rgba(184,135,79,0.16)] blur-[2px]" />
      <div className="absolute w-[180px] h-[180px] rounded-full top-[12%] left-[8%] bg-white/[0.04] blur-[2px]" />

      <div className="relative z-10 w-full max-w-[480px] text-center animate-fadein">
        {/* thin rotating gold ring behind the mark */}
        <div className="pointer-events-none absolute top-[26px] left-1/2 -translate-x-1/2 w-[230px] h-[230px] rounded-full border border-[rgba(227,196,143,0.25)] animate-spinslow">
          <span className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-light shadow-[0_0_12px_2px_#E3C48F]" />
        </div>

        <div className="relative w-[72px] h-[72px] mx-auto mb-[30px] rounded-[20px] bg-gradient-to-br from-gold-light to-gold flex items-center justify-center font-serif font-bold text-wine-dark text-[28px] shadow-[0_16px_38px_rgba(0,0,0,0.35)]">
          4F
        </div>
        {/* {greet} */}
        <p className="text-xs tracking-[4px] uppercase text-white/55 mb-3">
          {greet}
        </p>
        <h1 className="font-serif font-normal text-white text-[clamp(30px,4.5vw,44px)] leading-tight mb-3.5">
          Welcome back,
          <br />
          {/* {currentUser.name.split(' ')[0]} */}
          <span className="text-gold-light">{name}</span>
        </h1>
        <p className="text-white/65 text-[15px] leading-[1.7] mx-auto mb-10 max-w-[360px]">
          Your shop is right where you left it. Let's get back to it.
        </p>

        <button
          //   onClick={() => navigate(destination, { replace: true })}
          className="inline-flex items-center gap-[9px] bg-gradient-to-br from-gold-light to-gold text-wine-dark font-bold text-[14.5px] px-8 py-[14px] rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.32)] transition-all group"
        >
          Enter shop manager
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <div className="w-[38px] h-0.5 bg-white/20 rounded-full mx-auto mt-[34px] mb-4" />
        <p className="text-white/40 text-[11.5px] tracking-[1.5px] uppercase">
          4 Fashion · Ladies Footwear
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
