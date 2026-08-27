"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ConnectivitySection from "./components/ConnectivitySection";
import UnitsPricingSection from "./components/UnitsPricingSection";
import TestimonialSection from "./components/TestimonialSection";
import AmenitiesSection from "./components/AmenitiesSection";
import ComplianceSection from "./components/ComplianceSection";
import YieldShareSection from "./components/YieldShareSection";
import VideoShowCase from "./components/VideoShowCase";
import Footer from "./components/Footer";
import LeadCaptureModal from "./components/LeadCaptureModal";

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("1-Bedroom RESO (Popular)");

  // Anti-Inspect Keyboard / Shortcut Trap
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = typeof window !== "undefined" && navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const isInspect =
        e.key === "F12" ||
        ((e.ctrlKey || (isMac && e.metaKey)) && e.shiftKey && (e.key === "I" || e.key === "i")) ||
        ((e.ctrlKey || (isMac && e.metaKey)) && e.shiftKey && (e.key === "J" || e.key === "j")) ||
        ((e.ctrlKey || (isMac && e.metaKey)) && e.shiftKey && (e.key === "C" || e.key === "c")) ||
        ((e.ctrlKey || (isMac && e.metaKey)) && (e.key === "U" || e.key === "u")) ||
        ((e.ctrlKey || (isMac && e.metaKey)) && (e.key === "S" || e.key === "s"));

      if (isInspect) {
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
      window.open(`mailto:?subject=Executive Brief: SMDC Gold Towers RESO&body=${text}%20${url}`, "_self");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#071324] font-sans text-white selection:bg-[#C59B27] selection:text-[#071324]">
      {/* 1. Header Navigation */}
      <Navigation onBookTour={() => openForm()} />

      {/* 2. Hero Header */}
      <HeroSection onClaimBrief={() => openForm()} />

      {/* 3. Protected Video Showcase */}
      <VideoShowCase videoUrl="https://your-store.public.blob.vercel-storage.com/gold-towers-walkthrough.mp4" />

      {/* 4. Connectivity & Arteries */}
      <ConnectivitySection />

      {/* 5. Units & Pricing Inventory */}
      <UnitsPricingSection onInquire={(unit) => openForm(unit)} />

      {/* 6. Investor Story & OFW Testimonial */}
      <TestimonialSection />

      {/* 7. 24/7 Amenities */}
      <AmenitiesSection />

      {/* 8. Permitted vs Prohibited Rules */}
      <ComplianceSection />

      {/* 9. MRR & Viral Share Strip */}
      <YieldShareSection onShare={handleShare} />

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultUnit={selectedUnit}
      />
    </div>
  );
}