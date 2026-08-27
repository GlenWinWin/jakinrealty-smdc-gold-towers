"use client";

import { Compass, Layers, Check } from "lucide-react";

export default function ConnectivitySection() {
  return (
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
  );
}