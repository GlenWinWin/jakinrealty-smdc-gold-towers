"use client";

import { useState, useEffect } from "react";
import LeadCaptureModal from "./components/LeadCaptureModal";
import SimpleProtectedVideo from "./components/SimpleProtectedVideo";
import {
  Waves,
  Briefcase,
  Coffee,
  Activity,
  Compass,
  ShieldCheck,
  Check,
  X,
  Share2,
  Mail,
  Plane,
  Building2,
  Zap,
  Layers,
} from "lucide-react";

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("1-Bedroom RESO (Popular)");

  // 1. Anti-Inspect & DevTools Keyboard Blocker
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = typeof window !== "undefined" && navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const isInspectShortcut =
        e.key === "F12" ||
        ((e.ctrlKey || (isMac && e.metaKey)) && e.shiftKey && (e.key === "I" || e.key === "i")) ||
        ((e.ctrlKey || (isMac && e.metaKey)) && e.shiftKey && (e.key === "J" || e.key === "j")) ||
        ((e.ctrlKey || (isMac && e.metaKey)) && e.shiftKey && (e.key === "C" || e.key === "c")) ||
        ((e.ctrlKey || (isMac && e.metaKey)) && (e.key === "U" || e.key === "u")) ||
        ((e.ctrlKey || (isMac && e.metaKey)) && (e.key === "S" || e.key === "s"));

      if (isInspectShortcut) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openForm = (unit?: string) => {
    if (unit) setSelectedUnit(unit);
    setModalOpen(true);
  };

  const handleShare = (platform: "whatsapp" | "email") => {
    const text = encodeURIComponent(
      "Review the SMDC Gold Towers RESO Executive Brief & Pricing across NAIA Terminal 1:"
    );
    const url = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");

    if (platform === "whatsapp") {
      window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
    } else {
      window.open(
        `mailto:?subject=Executive Brief: SMDC Gold Towers RESO&body=${text}%20${url}`,
        "_self"
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#071324] font-sans text-white selection:bg-[#C59B27] selection:text-[#071324]">
      {/* 1. TOP NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#071324]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4.5 md:px-12">
          <div className="flex items-center space-x-3">
            <span className="font-sans text-xl font-black tracking-wider text-[#0080FF] drop-shadow-[0_0_10px_rgba(0,128,255,0.35)]">
              SMDC
            </span>
            <span className="text-white/20 font-light">|</span>
            <span className="font-bold tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] via-[#DFB743] to-[#C59B27] text-xs sm:text-sm uppercase">
              GOLD TOWERS RESO
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-gray-300">
            <a href="#overview" className="transition hover:text-[#DFB743]">Overview</a>
            <a href="#virtual-tour" className="transition hover:text-[#DFB743]">Virtual Tour</a>
            <a href="#connectivity" className="transition hover:text-[#DFB743]">Connectivity</a>
            <a href="#units" className="transition hover:text-[#DFB743]">Units & Pricing</a>
            <a href="#amenities" className="transition hover:text-[#DFB743]">Amenities</a>
            <a href="#compliance" className="transition hover:text-[#DFB743]">RESO Guidelines</a>
          </nav>

          <button
            onClick={() => openForm()}
            className="rounded bg-gradient-to-r from-[#C59B27] to-[#DFB743] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#071324] shadow-[0_4px_20px_rgba(197,155,39,0.25)] transition duration-200 hover:shadow-[0_4px_25px_rgba(223,183,67,0.4)] active:scale-95"
          >
            Book VIP Tour
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="overview" className="relative px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-[#071324] via-[#0B1F3A] to-[#071324]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[550px] w-[800px] rounded-full bg-[#C59B27]/10 blur-[160px]" />
          <div className="h-[350px] w-[550px] -translate-y-24 rounded-full bg-[#0080FF]/5 blur-[130px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2.5 border border-[#C59B27]/30 bg-[#C59B27]/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md shadow-[inset_0_0_12px_rgba(197,155,39,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFB743] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DFB743]" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.26em] text-[#DFB743]">
              Premier Aerotropolis Living & Enterprise
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12]">
            Work, Live & Expand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] via-[#F5E6B3] to-[#C59B27] drop-shadow-sm">
              Across NAIA Terminal 1
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
            A home that works for you. Integrated Residential-Offices (RESO) built with 100% emergency backup power, dual optical fiber redundancy, remote turnstiles, and 24/7 commercial facilities.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openForm()}
              className="w-full sm:w-auto rounded bg-gradient-to-r from-[#C59B27] to-[#DFB743] px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#071324] shadow-[0_6px_25px_rgba(197,155,39,0.3)] transition duration-200 hover:scale-[1.02] active:scale-95"
            >
              Claim Project Brief & Pricing
            </button>
            <a
              href="#virtual-tour"
              className="w-full sm:w-auto rounded border border-white/20 bg-white/[0.03] backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/[0.08] hover:border-white/30 transition duration-200"
            >
              Watch Video Tour
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/[0.08] pt-8 max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Plane className="h-5 w-5 text-[#DFB743] mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-[#DFB743]">0.4 km</div>
              <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">To NAIA Terminal 1</div>
            </div>
            <div className="flex flex-col items-center border-l border-white/[0.08]">
              <Activity className="h-5 w-5 text-[#DFB743] mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-[#DFB743]">90%</div>
              <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">Construction Progress</div>
            </div>
            <div className="flex flex-col items-center border-l border-white/[0.08]">
              <Zap className="h-5 w-5 text-[#DFB743] mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-[#DFB743]">100%</div>
              <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">Power Redundancy</div>
            </div>
            <div className="flex flex-col items-center border-l border-white/[0.08]">
              <Building2 className="h-5 w-5 text-[#DFB743] mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-[#DFB743]">2 Towers</div>
              <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">13 Floors • 2,050 Units</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROTECTED VIDEO SHOWCASE SECTION */}
      <section id="virtual-tour" className="relative w-full bg-[#05101E] px-6 py-20 border-b border-white/[0.08]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#DFB743] block">
              Cinematic Virtual Tour
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1.5">
              Immersive 3D Walkthrough & Project Experience
            </h2>
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-2">
              Protected preview stream of the Gold Towers RESO architecture & unit mockups
            </p>
          </div>

          <SimpleProtectedVideo
            src="https://zz2dqnbskxk2ooan.public.blob.vercel-storage.com/Gold%20Residences.mp4"
          />
        </div>
      </section>

      {/* 4. LOCATION & STRATEGIC CONNECTIVITY */}
      <section id="connectivity" className="relative w-full bg-[#071324] px-6 py-20 border-b border-white/[0.08]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#DFB743] block">
              Strategic Aerotropolis Hub
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1.5">
              Unmatched Proximity & Major Transit Arteries
            </h2>
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-2">
              Ninoy Aquino Ave., Brgy. Sto. Niño, Parañaque City • DHSUD LTS No. 0000137
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Distances */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-[#DFB743] uppercase tracking-wider mb-5 flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#DFB743]" />
                Airport & Entertainment City Distances
              </h3>
              <div className="grid grid-cols-2 gap-3.5 text-xs">
                <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                  <span className="text-gray-400 block text-[11px]">Duty Free Philippines</span>
                  <span className="text-base font-bold text-white mt-0.5 block">0.2 km</span>
                </div>
                <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                  <span className="text-gray-400 block text-[11px]">NAIA Terminal 1</span>
                  <span className="text-base font-bold text-white mt-0.5 block">0.4 km</span>
                </div>
                <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                  <span className="text-gray-400 block text-[11px]">NAIA Terminal 2</span>
                  <span className="text-base font-bold text-white mt-0.5 block">1.45 km</span>
                </div>
                <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                  <span className="text-gray-400 block text-[11px]">NAIA Terminal 4 Domestic</span>
                  <span className="text-base font-bold text-white mt-0.5 block">2.00 km</span>
                </div>
                <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                  <span className="text-gray-400 block text-[11px]">NAIA Terminal 3</span>
                  <span className="text-base font-bold text-white mt-0.5 block">2.12 km</span>
                </div>
                <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                  <span className="text-gray-400 block text-[11px]">Okada & City of Dreams</span>
                  <span className="text-base font-bold text-white mt-0.5 block">2.34 – 2.45 km</span>
                </div>
              </div>
            </div>

            {/* Infrastructure Arteries */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#DFB743] uppercase tracking-wider mb-5 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[#DFB743]" />
                  Infrastructure Projects & Masterplan
                </h3>
                <ul className="space-y-3.5 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#DFB743] shrink-0 mt-0.5" />
                    <span><strong>NAIA Expressway (NAIAX):</strong> Instant transit to Entertainment City, Skyway, and BGC.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#DFB743] shrink-0 mt-0.5" />
                    <span><strong>LRT-1 Extension:</strong> Station accessibility via MIA & Ninoy Aquino Ave. Stations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#DFB743] shrink-0 mt-0.5" />
                    <span><strong>C5 South Link:</strong> High-speed commercial artery connecting directly to Taguig & Makati.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-[#C59B27]/20 bg-[#C59B27]/5 p-4 text-xs text-gray-300">
                <span className="font-bold text-[#DFB743] block mb-1">Gold City Masterplan Allocation:</span>
                53,150 sqm RESO Spaces • 189,500 sqm Residential • 22,500 sqm Leisure • 5,150 sqm Commercial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UNITS & PRICING SECTION */}
      <section id="units" className="relative w-full bg-[#F5F2EB] px-6 py-24 text-[#071324]">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C59B27] block mb-2">
              Corporate Inventory
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#071324]">
              Versatile Executive Units & Pricing
            </h2>
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-medium">
              Tower A & B Inventory • 13 Floors • 332 Dedicated Parking Spaces
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
            {/* Studio RESO */}
            <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(11,31,58,0.08)]">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Entry Tier</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">94 Units</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-[#071324]">Studio RESO</h3>
                <div className="my-5 h-px bg-gray-100" />
                <ul className="space-y-3.5 text-xs text-gray-600">
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span><strong>Area:</strong> 20.27 – 20.64 sqm</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>Max 4 Occupants + 2 Visitors</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>100% Emergency Back-up Power</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>Dual Fiber Telecom Redundancy</span>
                  </li>
                </ul>
              </div>
              <div className="mt-9 border-t border-gray-100 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Investment Range</span>
                <p className="text-2xl font-bold tracking-tight text-[#C59B27] mt-0.5">
                  ₱6.23M – ₱6.63M
                </p>
                <button
                  onClick={() => openForm("Studio RESO")}
                  className="mt-5 w-full rounded border border-[#C59B27] py-3 text-xs font-bold uppercase tracking-wider text-[#071324] transition duration-200 hover:bg-[#C59B27] hover:text-white"
                >
                  Inquire Studio
                </button>
              </div>
            </div>

            {/* 1-Bedroom RESO */}
            <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#C59B27] bg-white p-8 shadow-[0_10px_35px_rgba(197,155,39,0.18)] transition duration-300 hover:-translate-y-2 md:-mt-3">
              <span className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-[#C59B27] to-[#DFB743] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#071324] shadow-md">
                Most Popular
              </span>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59B27]">Executive Tier</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] bg-[#C59B27]/10 px-2 py-0.5 rounded">1,766 Units</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-[#071324]">1-Bedroom RESO</h3>
                <div className="my-5 h-px bg-amber-100/70" />
                <ul className="space-y-3.5 text-xs text-gray-600">
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/15 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span><strong>Area:</strong> 25.58 – 28.67 sqm</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/15 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>Flexible Personal / Office Suite Layout</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/15 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>High Ceilings (~3.0m clearance)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/15 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>Fitted Kitchen with Cooktop & Hood</span>
                  </li>
                </ul>
              </div>
              <div className="mt-9 border-t border-amber-100/70 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Investment Range</span>
                <p className="text-2xl font-bold tracking-tight text-[#C59B27] mt-0.5">
                  ₱7.78M – ₱9.09M
                </p>
                <button
                  onClick={() => openForm("1-Bedroom RESO (Popular)")}
                  className="mt-5 w-full rounded bg-gradient-to-r from-[#C59B27] to-[#DFB743] py-3 text-xs font-bold uppercase tracking-wider text-[#071324] shadow-md transition duration-200 hover:shadow-[0_4px_20px_rgba(223,183,67,0.4)]"
                >
                  Inquire 1-Bedroom
                </button>
              </div>
            </div>

            {/* 1-BR End Corner RESO */}
            <div className="flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(11,31,58,0.08)]">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Enterprise Corner</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">190 Units</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-[#071324]">1-BR End Corner</h3>
                <div className="my-5 h-px bg-gray-100" />
                <ul className="space-y-3.5 text-xs text-gray-600">
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span><strong>Area:</strong> 32.80 sqm</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>Dual Window Natural Lighting</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>Unit Combination Eligible</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>Expansive Runway Panorama</span>
                  </li>
                </ul>
              </div>
              <div className="mt-9 border-t border-gray-100 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Investment Range</span>
                <p className="text-2xl font-bold tracking-tight text-[#C59B27] mt-0.5">
                  ₱8.04M – ₱10.08M
                </p>
                <button
                  onClick={() => openForm("1-BR End Corner RESO")}
                  className="mt-5 w-full rounded border border-[#C59B27] py-3 text-xs font-bold uppercase tracking-wider text-[#071324] transition duration-200 hover:bg-[#C59B27] hover:text-white"
                >
                  Inquire End Corner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 24/7 EXECUTIVE AMENITIES */}
      <section id="amenities" className="w-full bg-[#071324] px-6 py-20 text-white border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#DFB743] block">
              24/7 Enterprise Amenities
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-1.5">
              Comprehensive Work-Life Integration
            </h2>
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-2">
              All facilities and amenity areas accessible round-the-clock
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C59B27]/40 transition flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#C59B27]/10 text-[#DFB743] mb-3">
                <Waves className="h-6 w-6" />
              </div>
              <h4 className="text-xs font-bold text-white">Adjacent Lap Pools</h4>
              <p className="text-[10px] text-gray-400 mt-1">Symmetrical mirror lounge areas</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C59B27]/40 transition flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#C59B27]/10 text-[#DFB743] mb-3">
                <Briefcase className="h-6 w-6" />
              </div>
              <h4 className="text-xs font-bold text-white">Business Hub</h4>
              <p className="text-[10px] text-gray-400 mt-1">Meeting rooms & co-working suites</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C59B27]/40 transition flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#C59B27]/10 text-[#DFB743] mb-3">
                <Coffee className="h-6 w-6" />
              </div>
              <h4 className="text-xs font-bold text-white">Central Pavilion</h4>
              <p className="text-[10px] text-gray-400 mt-1">Refreshment lounge & 360 courtyard</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C59B27]/40 transition flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#C59B27]/10 text-[#DFB743] mb-3">
                <Activity className="h-6 w-6" />
              </div>
              <h4 className="text-xs font-bold text-white">Fitness & Yoga</h4>
              <p className="text-[10px] text-gray-400 mt-1">Modern gym & private studio</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C59B27]/40 transition flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#C59B27]/10 text-[#DFB743] mb-3">
                <Compass className="h-6 w-6" />
              </div>
              <h4 className="text-xs font-bold text-white">Sky Lounge</h4>
              <p className="text-[10px] text-gray-400 mt-1">Networking & leisure panoramic deck</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C59B27]/40 transition flex flex-col items-center">
              <div className="p-3 rounded-xl bg-[#C59B27]/10 text-[#DFB743] mb-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-xs font-bold text-white">Vault Security</h4>
              <p className="text-[10px] text-gray-400 mt-1">RFID access & remote turnstiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERMITTED USE & COMPLIANCE SECTION */}
      <section id="compliance" className="w-full bg-[#05101E] px-6 py-16 border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" /> Permitted RESO Business Categories
              </h3>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li>• Corporate satellite offices, professional firms, and creative agencies</li>
                <li>• Tech hubs, IT consultants, and remote BPO operations</li>
                <li>• Outpatient consultation clinics (Dental, Dermatology, Consultation)</li>
                <li>• Backroom administrative concessions (Travel, talent, delivery services)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-500/20 bg-rose-950/10 p-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-2">
                <X className="h-4 w-4 text-rose-400" /> Prohibited Unit Usage Restrictions
              </h3>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li>• High-density occupancy exceeding 6 total occupants or visitors</li>
                <li>• Heavy cooking facilities, catering hubs, and restaurants</li>
                <li>• Online betting, offshore gaming (POGO), and gambling entities</li>
                <li>• Political, diplomatic, or consular headquarter operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MRR HOOK & VIRAL SHARE WIDGET */}
      <section className="w-full bg-[#F5F2EB] px-6 py-14 text-[#071324] border-t border-gray-300/60">
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-300/80 bg-white p-7 md:p-9 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C59B27] block mb-1">
              Post-Purchase MRR Yield Hook
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#071324]">
              SMDC Good Stays & Greenmist Property Management
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl leading-relaxed">
              Enjoy zero-friction property monetization through turnkey corporate tenancy placement, facility preservation, and recurring leasing operations.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => handleShare("whatsapp")}
              className="flex-1 md:flex-none rounded bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-sm hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              <Share2 className="h-4 w-4" />
              <span>WhatsApp Share</span>
            </button>
            <button
              onClick={() => handleShare("email")}
              className="flex-1 md:flex-none rounded bg-[#071324] px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-black transition flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>Share to Board / CFO</span>
            </button>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#030914] px-6 py-8 text-center text-xs text-white/40">
        <p>© 2026 SMDC Gold Towers RESO • Summerspring Development Corporation • DHSUD LTS No. 0000137.</p>
      </footer>

      {/* Central CRM Lead Capture Integration Modal */}
      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultUnit={selectedUnit}
      />
    </div>
  );
}