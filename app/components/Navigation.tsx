"use client";

interface NavigationProps {
  onBookTour: () => void;
}

export default function Navigation({ onBookTour }: NavigationProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#071324]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Left: Brand Logo */}
        <div className="flex items-center space-x-3">
          <span className="font-sans text-xl font-black tracking-wider text-[#0080FF] drop-shadow-[0_0_10px_rgba(0,128,255,0.35)]">
            SMDC
          </span>
          <span className="text-white/20 font-light">|</span>
          <div className="flex flex-col font-bold tracking-[0.22em] text-[#DFB743] text-[11px] sm:text-xs leading-tight uppercase">
            <span>GOLD TOWERS</span>
            <span>RESO</span>
          </div>
        </div>

        {/* Center/Right Nav links with generous margin before the CTA */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-300">
          <a href="#overview" className="transition hover:text-[#DFB743]">
            Overview
          </a>
          <a href="#virtual-tour" className="transition hover:text-[#DFB743] text-center leading-tight">
            Virtual<br />Tour
          </a>
          <a href="#connectivity" className="transition hover:text-[#DFB743]">
            Connectivity
          </a>
          <a href="#units" className="transition hover:text-[#DFB743] text-center leading-tight">
            Units &<br />Pricing
          </a>
          <a href="#amenities" className="transition hover:text-[#DFB743]">
            Amenities
          </a>
          <a href="#compliance" className="transition hover:text-[#DFB743] text-center leading-tight">
            RESO<br />Guidelines
          </a>
        </nav>

        {/* Right: Book VIP Tour CTA Button */}
        <button
          onClick={onBookTour}
          className="ml-6 xl:ml-10 rounded bg-gradient-to-r from-[#C59B27] to-[#DFB743] px-6 py-3 font-bold uppercase tracking-[0.18em] text-[#071324] text-xs shadow-[0_4px_20px_rgba(197,155,39,0.25)] transition duration-200 hover:shadow-[0_4px_25px_rgba(223,183,67,0.4)] active:scale-95 whitespace-nowrap"
        >
          Book VIP Tour
        </button>
      </div>
    </header>
  );
}