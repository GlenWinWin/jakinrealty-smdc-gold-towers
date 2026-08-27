"use client";

import { Check, X } from "lucide-react";

export default function ComplianceSection() {
  return (
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
  );
}