import React from 'react';
import { useNavigate } from 'react-router-dom';



const CheckIcon = (props) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const features = [
  {
    title: 'Article & stock control',
    desc: 'Track every size and colour variant, with low-stock alerts before you run out.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
      </svg>
    ),
  },
  {
    title: 'Invoicing made simple',
    desc: 'Raise a bill in seconds, split payments, and track who still owes what.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
        <path d="M14 3v6h6" />
      </svg>
    ),
  },
  {
    title: 'Factory transfers',
    desc: 'Log incoming stock from the factory and reconcile it against your shelves.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Sales reports',
    desc: "See what's moving, what's not, and where your money is coming from.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-6 3 3 5-8" />
      </svg>
    ),
  },
];

const trustItems = [
  'Private — only I can log in',
  'Records saved automatically',
  'Built around my own shop',
  'Works on mobile & desktop',
];

const reminders = [
  { name: 'Sana Tariq', meta: 'INV-1042 · Due today', amt: 'Rs 18,000' },
  { name: 'Hina Shoe Store', meta: 'INV-1039 · Due today', amt: 'Rs 15,500' },
  { name: 'Mehwish Boutique', meta: 'INV-1035 · Overdue', amt: 'Rs 9,000' },
];

const stats = [
  { value: '1,092', label: 'Pairs in stock' },
  { value: '184', label: 'Invoices raised' },
  { value: 'Rs 12.4L', label: 'Sales tracked' },
  { value: '4', label: 'Team members' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const goLogin = () => navigate('/login');

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      {/* NAV */}
      <div className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-line">
        <div className="max-w-[1180px] mx-auto flex items-center justify-between px-6 md:px-8 py-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center font-bold text-wine-dark text-sm">
              4F
            </div>
            <span className="font-serif text-lg text-wine-dark">4 Fashion</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[13.5px] font-semibold text-charcoal/75 hover:text-charcoal transition">Features</a>
            <a href="#showcase" className="text-[13.5px] font-semibold text-charcoal/75 hover:text-charcoal transition">How it works</a>
            <a href="#contact" className="text-[13.5px] font-semibold text-charcoal/75 hover:text-charcoal transition">Contact</a>
          </div>

          <button
            onClick={goLogin}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-bold
                       bg-gradient-to-br from-gold-light to-gold text-wine-dark
                       shadow-[0_10px_24px_rgba(184,135,79,0.32)] hover:-translate-y-0.5 transition"
          >
            Login to dashboard
          </button>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,_#7A2740_0%,_#5C1A2B_45%,_#3E101C_100%)] px-6 md:px-8 pt-20 pb-28">
        <div className="absolute w-[460px] h-[460px] rounded-full -top-40 -right-28 bg-white/5 blur-[2px]" />
        <div className="absolute w-[320px] h-[320px] rounded-full -bottom-28 -left-24 bg-gold/15 blur-[2px]" />
        <div className="absolute w-[180px] h-[180px] rounded-full top-[14%] left-[8%] bg-white/[0.04] blur-[2px]" />

        <div className="relative z-10 max-w-[1180px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 text-center md:text-left">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-[11.5px] tracking-[2.5px] uppercase text-gold-light mb-6 before:content-[''] before:w-6 before:h-[1.5px] before:bg-gold-light">
              My shop · finance dashboard
            </div>
            <h1 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.12] text-white font-normal mb-5">
              My shop, my numbers <span className="text-gold-light">always in view.</span>
            </h1>
            <p className="text-[16px] leading-[1.7] text-white/70 max-w-[460px] mx-auto md:mx-0 mb-8">
              A private dashboard for my own shop — inventory, invoices, factory transfers and udhar, all tracked in one place, just for me.
            </p>
            <div className="flex flex-wrap gap-3.5 justify-center md:justify-start mb-9">
              <button
                onClick={goLogin}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[14.5px] font-bold
                           bg-gradient-to-br from-gold-light to-gold text-wine-dark
                           shadow-[0_10px_24px_rgba(184,135,79,0.32)] hover:-translate-y-0.5 transition"
              >
                Login to my dashboard
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[14.5px] font-bold
                           border-[1.5px] border-white/35 text-white hover:bg-white/10 transition"
              >
                See what's inside
              </a>
            </div>
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div>
                <b className="block font-serif text-xl text-white">1,200+</b>
                <span className="text-[11px] uppercase tracking-wide text-white/55">Pairs tracked</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <b className="block font-serif text-xl text-white">184</b>
                <span className="text-[11px] uppercase tracking-wide text-white/55">Invoices this month</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <b className="block font-serif text-xl text-white">Private</b>
                <span className="text-[11px] uppercase tracking-wide text-white/55">Only I can see this</span>
              </div>
            </div>
          </div>

          {/* Hero visual mock card */}
          <div className="flex-1 relative max-w-[440px] w-full">
            <div className="bg-white rounded-[22px] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.35)] -rotate-2">
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif text-base text-wine-dark">Dashboard</span>
                <span className="text-[11px] text-muted">Today</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="bg-cream border border-line rounded-xl px-3.5 py-3">
                  <span className="block text-[9.5px] uppercase text-muted tracking-wide mb-1">Total sales</span>
                  <b className="font-serif text-base">Rs 1.24L</b>
                </div>
                <div className="bg-cream border border-line rounded-xl px-3.5 py-3">
                  <span className="block text-[9.5px] uppercase text-muted tracking-wide mb-1">Unpaid</span>
                  <b className="font-serif text-base">Rs 26,200</b>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-line text-xs">
                <span>Sara Footwear</span>
                <span className="text-[9.5px] font-bold px-2.5 py-0.5 rounded-full bg-success-bg text-success">paid</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-line text-xs">
                <span>Sana Tariq</span>
                <span className="text-[9.5px] font-bold px-2.5 py-0.5 rounded-full bg-danger-bg text-danger">unpaid</span>
              </div>
              <div className="flex items-center justify-between py-2 text-xs">
                <span>Ali Shoe Mart</span>
                <span className="text-[9.5px] font-bold px-2.5 py-0.5 rounded-full bg-[#FBF1DE] text-[#8a6a1f]">partial</span>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-3.5 rotate-3 items-center gap-2 bg-white rounded-2xl px-3.5 py-2.5 text-xs font-bold text-wine-dark shadow-[0_16px_34px_rgba(0,0,0,0.22)]">
              <span className="w-2 h-2 rounded-full bg-success" /> New order placed
            </div>
            <div className="hidden sm:flex absolute -bottom-4 -left-6 -rotate-3 items-center gap-2 bg-white rounded-2xl px-3.5 py-2.5 text-xs font-bold text-wine-dark shadow-[0_16px_34px_rgba(0,0,0,0.22)]">
              📦 Stock synced
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-white border-b border-line px-6 md:px-8 py-5">
        <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-center gap-x-11 gap-y-3">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-muted">
              <CheckIcon className="text-gold flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="px-6 md:px-8 py-24">
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <div className="text-[11.5px] tracking-[2.5px] uppercase text-wine font-bold mb-3.5">What you get</div>
          <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[36px] text-wine-dark font-normal mb-3.5">
            Everything your shop counter needs
          </h2>
          <p className="text-[14.5px] text-muted leading-[1.7]">
            From the first pair on the shelf to the last rupee collected — one system keeps track of it all.
          </p>
        </div>

        <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-line rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(92,26,43,0.1)] transition"
            >
              <div className="w-11 h-11 rounded-xl bg-blush text-wine flex items-center justify-center mb-4.5">
                {f.icon}
              </div>
              <h3 className="text-[15.5px] text-charcoal mb-2">{f.title}</h3>
              <p className="text-[13px] text-muted leading-[1.65]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE — reminders */}
      <section id="showcase" className="bg-white border-t border-b border-line px-6 md:px-8 py-24">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-center gap-14">
          <div className="flex-1">
            <div className="text-[11.5px] tracking-[2.5px] uppercase text-wine font-bold mb-3.5">Udhar, sorted</div>
            <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] text-wine-dark font-normal mb-4 leading-tight">
              Never lose track of a pending payment again
            </h2>
            <p className="text-[14.5px] text-muted leading-[1.75] max-w-[440px] mb-6.5">
              4 Fashion quietly watches every unpaid invoice and nudges me the day it's due — so no customer's balance slips through the cracks.
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                'Daily "due today" reminders on my dashboard',
                'Partial payments tracked automatically',
                'One tap from reminder to full invoice history',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[13.5px] text-charcoal">
                  <span className="w-5 h-5 rounded-full bg-success-bg text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-[460px] w-full">
            <div className="bg-cream border border-line rounded-[20px] p-6">
              {reminders.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between bg-white border border-line rounded-xl px-4 py-3.5 mb-2.5 last:mb-0"
                >
                  <div>
                    <div className="text-[13.5px] font-bold text-charcoal">{r.name}</div>
                    <div className="text-[11px] text-muted">{r.meta}</div>
                  </div>
                  <div className="text-[13.5px] font-bold text-wine-dark">{r.amt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <div className="bg-wine-dark px-6 md:px-8 py-14">
        <div className="max-w-[1180px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <b className="block font-serif text-3xl text-gold-light mb-1.5">{s.value}</b>
              <span className="text-xs uppercase tracking-wide text-white/60">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <section id="login" className="relative overflow-hidden mx-6 md:mx-8 my-24 rounded-[28px] bg-[radial-gradient(circle_at_75%_30%,_#7A2740_0%,_#5C1A2B_50%,_#3E101C_100%)] px-8 py-16 text-center">
        <div className="absolute w-[280px] h-[280px] rounded-full bg-gold/20 -top-24 -left-20 blur-[2px]" />
        <div className="relative z-10 max-w-[560px] mx-auto">
          <h2 className="font-serif text-[24px] sm:text-[30px] lg:text-[34px] text-white font-normal mb-3.5">
            Straight back to my shop's numbers
          </h2>
          <p className="text-[14.5px] text-white/65 leading-[1.7] mb-7">
            Everything I need to run my shop — stock, invoices, and who still owes what — one login away.
          </p>
          <button
            onClick={goLogin}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[14.5px] font-bold
                       bg-gradient-to-br from-gold-light to-gold text-wine-dark
                       shadow-[0_10px_24px_rgba(184,135,79,0.32)] hover:-translate-y-0.5 transition"
          >
            Login to my dashboard
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-wine-dark px-6 md:px-8 pt-12 pb-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex flex-wrap justify-between gap-10 pb-8 border-b border-white/10">
            <div className="max-w-[280px]">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center font-bold text-wine-dark text-sm">
                  4F
                </div>
                <span className="font-serif text-lg text-white">4 Fashion</span>
              </div>
              <p className="text-xs text-blush/60 leading-[1.7]">
                My personal dashboard for tracking my own shop — inventory, invoicing and udhar in one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-14">
              <div>
                <h4 className="text-[11px] uppercase tracking-wide text-gold-light mb-3.5">Product</h4>
                <a href="#features" className="block text-[13px] text-blush/75 hover:text-white mb-2.5">Features</a>
                <a href="#showcase" className="block text-[13px] text-blush/75 hover:text-white mb-2.5">How it works</a>
              </div>
              <div>
                <h4 className="text-[11px] uppercase tracking-wide text-gold-light mb-3.5">Account</h4>
                <button onClick={goLogin} className="block text-[13px] text-blush/75 hover:text-white mb-2.5 text-left">Login</button>
                <a href="#" className="block text-[13px] text-blush/75 hover:text-white mb-2.5">Forgot password</a>
              </div>
              <div>
                <h4 className="text-[11px] uppercase tracking-wide text-gold-light mb-3.5">Support</h4>
                <a href="#contact" className="block text-[13px] text-blush/75 hover:text-white mb-2.5">Contact us</a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-2.5 pt-5">
            <p className="text-[11.5px] text-blush/50">© 2026 4 Fashion Shop Manager. Records saved automatically.</p>
            <p className="text-[11.5px] text-blush/50">Ladies footwear · Lahore, Pakistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}