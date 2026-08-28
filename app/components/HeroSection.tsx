"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Plane, Activity, Zap, Building2, PhilippinePeso, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  onClaimBrief: () => void;
}

export default function HeroSection({ onClaimBrief }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Cinematic staggered entrance
      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          metricsRef.current ? metricsRef.current.children : [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="overview"
      className="relative px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-[#071324] via-[#0B1F3A] to-[#071324]"
    >
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[550px] w-[800px] rounded-full bg-[#C59B27]/10 blur-[160px]" />
        <div className="h-[350px] w-[550px] -translate-y-24 rounded-full bg-[#0080FF]/5 blur-[130px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 border border-[#C59B27]/30 bg-[#C59B27]/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md shadow-[inset_0_0_12px_rgba(197,155,39,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFB743] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DFB743]" />
          </span>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.26em] text-[#DFB743]">
            Premier Aerotropolis Living & Enterprise
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12]"
        >
          Work, Live & Expand <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] via-[#F5E6B3] to-[#C59B27] drop-shadow-sm">
            Across NAIA Terminal 1
          </span>
        </h1>

        <p
          ref={descRef}
          className="mx-auto mt-7 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-gray-300 font-normal"
        >
          A home that works for you. Integrated Residential-Offices (RESO) built with 100% emergency backup power, dual optical fiber redundancy, remote turnstiles, and 24/7 commercial facilities.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onClaimBrief}
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

        {/* 6-Column Metrics Grid */}
        <div
          ref={metricsRef}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-3 border-t border-white/[0.08] pt-8 mx-auto text-center"
        >
          <div className="flex flex-col items-center">
            <Plane className="h-5 w-5 text-[#DFB743] mb-2" />
            <div className="text-lg sm:text-xl font-bold text-[#DFB743]">0.4 km</div>
            <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">To NAIA Terminal 1</div>
          </div>

          <div className="flex flex-col items-center border-l border-white/[0.08]">
            <Activity className="h-5 w-5 text-[#DFB743] mb-2" />
            <div className="text-lg sm:text-xl font-bold text-[#DFB743]">90%</div>
            <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">Construction Progress</div>
          </div>

          <div className="flex flex-col items-center border-l sm:border-l-0 lg:border-l border-white/[0.08]">
            <Zap className="h-5 w-5 text-[#DFB743] mb-2" />
            <div className="text-lg sm:text-xl font-bold text-[#DFB743]">100%</div>
            <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">Power Redundancy</div>
          </div>

          <div className="flex flex-col items-center border-l border-white/[0.08]">
            <Building2 className="h-5 w-5 text-[#DFB743] mb-2" />
            <div className="text-lg sm:text-xl font-bold text-[#DFB743]">2 Towers</div>
            <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">13 Flrs • 2,050 Units</div>
          </div>

          <div className="flex flex-col items-center border-l border-white/[0.08]">
            <PhilippinePeso className="h-5 w-5 text-[#DFB743] mb-2" />
            <div className="text-lg sm:text-xl font-bold text-[#DFB743]">₱2,500</div>
            <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">Potential / Day</div>
          </div>

          <div className="flex flex-col items-center border-l border-white/[0.08]">
            <TrendingUp className="h-5 w-5 text-[#DFB743] mb-2" />
            <div className="text-lg sm:text-xl font-bold text-[#DFB743]">₱75,000</div>
            <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-1">Fully Booked / Mo</div>
          </div>
        </div>
      </div>
    </section>
  );
}