"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

interface UnitsPricingSectionProps {
  onInquire: (unit: string) => void;
}

export default function UnitsPricingSection({ onInquire }: UnitsPricingSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="units" className="relative w-full bg-[#F5F2EB] px-6 py-24 text-[#071324]">
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

        <div ref={cardsRef} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
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
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27] mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>
                    <strong>Area:</strong> 20.27 – 20.64 sqm <span className="text-gray-400 font-normal">({`218.19 – 222.17 sq ft`})</span>
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>Max 4 Occupants + 2 Visitors</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>100% Emergency Back-up Power</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
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
                onClick={() => onInquire("Studio RESO")}
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
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/15 text-[#C59B27] mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>
                    <strong>Area:</strong> 25.58 – 28.67 sqm <span className="text-gray-400 font-normal">({`275.32 – 308.62 sq ft`})</span>
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/15 text-[#C59B27]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>Flexible Personal / Office Suite Layout</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/15 text-[#C59B27]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>High Ceilings (~3.0m clearance)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/15 text-[#C59B27]">
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
                onClick={() => onInquire("1-Bedroom RESO (Popular)")}
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
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27] mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>
                    <strong>Area:</strong> 32.80 sqm <span className="text-gray-400 font-normal">({`353.05 sq ft`})</span>
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>Dual Window Natural Lighting</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>Unit Combination Eligible</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C59B27]/10 text-[#C59B27]">
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
                onClick={() => onInquire("1-BR End Corner RESO")}
                className="mt-5 w-full rounded border border-[#C59B27] py-3 text-xs font-bold uppercase tracking-wider text-[#071324] transition duration-200 hover:bg-[#C59B27] hover:text-white"
              >
                Inquire End Corner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}