"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import VideoShowCase from "./components/VideoShowCase";
import ConnectivitySection from "./components/ConnectivitySection";
import UnitsPricingSection from "./components/UnitsPricingSection";
import TestimonialSection from "./components/TestimonialSection";
import AmenitiesSection from "./components/AmenitiesSection";
import ComplianceSection from "./components/ComplianceSection";
import YieldShareSection from "./components/YieldShareSection";
import Footer from "./components/Footer";
import LeadCaptureModal from "./components/LeadCaptureModal";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://jakinrealty.com/#agent",
      "name": "Jakin Realty",
      "url": "https://jakinrealty.com",
      "logo": "https://jakinrealty.com/favicon.ico",
      "image": "https://jakinrealty.com/og-image.jpg",
      "description":
        "Premier real estate advisory specializing in SMDC developments, luxury investments, and RESO commercial properties.",
      "areaServed": {
        "@type": "Country",
        "name": "Philippines",
      },
    },
    {
      "@type": "RealEstateListing",
      "@id": "https://jakinrealty.com/#listing",
      "name": "SMDC Gold Towers RESO",
      "description":
        "Dual-purpose Residential-Offices directly across NAIA Terminal 1 in Gold City Township, Parañaque City.",
      "url": "https://jakinrealty.com",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "PHP",
        "lowPrice": "6230000",
        "highPrice": "10080000",
        "offerCount": "2050",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ninoy Aquino Avenue, Brgy. Sto. Niño",
        "addressLocality": "Parañaque City",
        "addressRegion": "Metro Manila",
        "postalCode": "1700",
        "addressCountry": "PH",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "14.5085",
        "longitude": "121.0003",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is RESO in SMDC Gold Towers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "RESO stands for Residential-Office. It is a dual-purpose zoned space allowing owners to legally operate corporate offices, satellite clinics, or consultation firms while maintaining private residential quarters.",
          },
        },
        {
          "@type": "Question",
          "name": "How far is Gold Towers from NAIA Terminal 1?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "SMDC Gold Towers is located directly across NAIA Terminal 1 at a distance of 0.4 km along Ninoy Aquino Avenue, Parañaque City.",
          },
        },
      ],
    },
  ],
};

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("1-Bedroom RESO (Popular)");

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
      {/* Schema / SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navigation onBookTour={() => openForm()} />

      {/* Hero Header */}
      <HeroSection onClaimBrief={() => openForm()} />

      {/* Protected Video Showcase */}
      <VideoShowCase />

      {/* Connectivity & Arteries */}
      <ConnectivitySection />

      {/* Units & Pricing Inventory */}
      <UnitsPricingSection onInquire={(unit) => openForm(unit)} />

      {/* Investor Story & OFW Testimonial */}
      <TestimonialSection />

      {/* 24/7 Amenities */}
      <AmenitiesSection />

      {/* Permitted vs Prohibited Rules */}
      <ComplianceSection />

      {/* MRR & Viral Share Strip */}
      <YieldShareSection onShare={handleShare} />

      {/* Footer */}
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