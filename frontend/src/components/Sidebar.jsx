import React from 'react'
const NAV_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    key: 'inventory',
    label: 'Articles',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
      </svg>
    ),
  },
  {
    key: 'factory',
    label: 'Factory transfers',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    key: 'newinvoice',
    label: 'New invoice',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
  },
  {
    key: 'invoices',
    label: 'Invoices',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
        <path d="M14 3v6h6" />
      </svg>
    ),
  },
  {
    key: 'orderbook',
    label: 'Order book',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    key: 'salesreport',
    label: 'Sales report',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-6 3 3 5-8" />
      </svg>
    ),
  },
  {
    key: 'team',
    label: 'Team',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];


const Sidebar = () => {
  return (
     <div className="w-[230px] bg-wine text-blush flex-shrink-0 flex flex-col p-7 px-[18px] sticky top-0 h-screen">
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className="w-[38px] h-[38px] rounded-full bg-gold flex items-center justify-center font-serif font-bold text-wine-dark text-lg flex-shrink-0">
          4F
        </div>
        <div className="font-serif text-xl tracking-wide text-white leading-tight">4 Fashion</div>
      </div>
      <p className="text-[10.5px] tracking-[2px] uppercase text-blush-deep mb-[30px] pl-12">Ladies footwear</p>

      <nav className="flex flex-col gap-[3px]">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            // onClick={() => goPage(item.key)}
            className={
              'flex items-center gap-[11px] bg-transparent border-none px-3 py-[11px] rounded-lg text-[14.5px] text-left cursor-pointer transition-colors '
            //   +
            //   (page === item.key ? 'bg-white/[0.14] text-white font-semibold' : 'text-blush hover:bg-white/[0.08]className={page === item.key ? 'opacity-100' : 'opacity-85'}
            }
          >
            <span >{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto mb-0 pt-4">
        <label className="block text-[rgba(241,217,211,0.7)] text-[10px] uppercase tracking-[1.2px] font-bold mb-1.5">
          Logged in as
        </label>
        <div className="text-white font-semibold text-[13.5px] mb-0.5"></div>
        <div className="text-[11.5px] text-[rgba(241,217,211,0.7)] mb-2.5"></div>
        <button
        //   onClick={logout}
          className="btn btn-ghost btn-sm w-full justify-center border-white/30 text-white hover:bg-white/10"
        >
          Logout
        </button>
      </div>
{/*  */}
      <div className="mt-5 text-[11.5px] text-[rgba(241,217,211,0.55)] pl-1 leading-relaxed">
        4 Fashion Shop Manager
        <br />
        Records saved automatically.
      </div>
    </div>
  )
}

export default Sidebar
