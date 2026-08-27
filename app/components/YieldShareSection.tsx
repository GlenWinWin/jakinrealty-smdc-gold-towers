"use client";

import { Share2, Mail } from "lucide-react";

interface YieldShareSectionProps {
  onShare: (platform: "whatsapp" | "email") => void;
}

export default function YieldShareSection({ onShare }: YieldShareSectionProps) {
  return (
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
            onClick={() => onShare("whatsapp")}
            className="flex-1 md:flex-none rounded bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-sm hover:opacity-95 transition flex items-center justify-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span>WhatsApp Share</span>
          </button>
          <button
            onClick={() => onShare("email")}
            className="flex-1 md:flex-none rounded bg-[#071324] px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-black transition flex items-center justify-center gap-2"
          >
            <Mail className="h-4 w-4" />
            <span>Share to Board / CFO</span>
          </button>
        </div>
      </div>
    </section>
  );
}