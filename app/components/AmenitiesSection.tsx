"use client";

import { Waves, Briefcase, Coffee, Activity, Compass, ShieldCheck } from "lucide-react";

export default function AmenitiesSection() {
  return (
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
  );
}