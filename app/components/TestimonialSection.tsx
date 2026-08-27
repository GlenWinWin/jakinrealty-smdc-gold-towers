"use client";

import { Star, Quote, TrendingUp, MapPin } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="relative w-full bg-[#050E1A] px-6 py-24 border-y border-white/[0.08] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-[#C59B27]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#DFB743] mb-2">
            <Star className="h-3.5 w-3.5 fill-[#DFB743] text-[#DFB743]" />
            Investor Success Story & OFW Experience
            <Star className="h-3.5 w-3.5 fill-[#DFB743] text-[#DFB743]" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            A Global Investor&apos;s Journey from Norway
          </h2>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Managed from Abroad • Turnkey Airbnb Performance • Dedicated Agent Support
          </p>
        </div>

        <div className="rounded-3xl border border-[#C59B27]/30 bg-gradient-to-b from-[#091B33]/90 via-[#071527]/90 to-[#050E1A]/90 p-8 sm:p-12 shadow-[0_12px_45px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <Quote className="h-10 w-10 text-[#DFB743]/30 mb-6" />

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-300 font-light">
            <p className="font-semibold text-white text-base sm:text-lg">
              Dear Ms. Joy Relloso,
            </p>

            <p>
              Thank you so much for giving me the opportunity to share my experience.
            </p>

            <p>
              Being based abroad, investing in a property in the Philippines was a big decision for me. One of the reasons I trusted SMDC was because of its reputation, strategic locations, and the potential for the property to generate income through Airbnb. I wanted an investment that I could manage even while living in Norway, and I felt that SMDC offered a good combination of quality, location, and long-term potential.
            </p>

            <p>
              What made the whole experience even better was having a very reliable and supportive agent like you, <strong className="text-white font-semibold">Ms. Joy Relloso</strong>. From the very beginning, you patiently guided me through the documentation, answered all my questions, and made the process much easier despite me being abroad. You were also very helpful throughout the turnover process and made sure that everything was properly taken care of. Having someone I could trust on the ground gave me so much peace of mind.
            </p>

            {/* Metric Highlight Box */}
            <div className="my-6 rounded-2xl border border-[#DFB743]/30 bg-[#DFB743]/5 p-5 text-sm">
              <div className="flex items-center gap-2 font-bold text-[#DFB743] mb-1.5 uppercase text-xs tracking-wider">
                <TrendingUp className="h-4 w-4 text-[#DFB743]" />
                Airbnb Performance & Rental Return
              </div>
              <p className="text-gray-200">
                &ldquo;As for the unit&apos;s performance, I am very happy with how it has turned out. <strong className="text-[#DFB743]">Our unit has been doing very well as an Airbnb and is almost fully booked.</strong> The location has been a major advantage, and we are very pleased that the property is generating a good income. It has been rewarding to see that the investment we made is actually working as we hoped.&rdquo;
              </p>
            </div>

            <p>
              For fellow OFWs and first-time investors, my advice would be to do your research carefully, choose a good location, and consider the property&apos;s potential for both appreciation and rental income. Don&apos;t be afraid to ask questions and take your time before making a decision. Most importantly, find an agent who is trustworthy, responsive, and genuinely willing to assist you throughout the entire process.
            </p>

            <p>
              For me, having an agent who continues to be supportive even after the sale and turnover is very important. And I am truly grateful that I had you, Ms. Joy. Your patience, professionalism, and dedication made my investment journey much easier and more reassuring, especially since I am managing everything from abroad.
            </p>

            <p>
              I am very happy with my decision to invest with SMDC, and I would definitely consider investing in another property in the future.
            </p>

            <p>
              Thank you again, Ms. Joy, for all your support and for making this journey such a positive experience.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide">Joy Obina Strand</h4>
              <div className="flex items-center gap-1.5 text-xs text-[#DFB743] mt-0.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>SMDC Investor • Based in Norway</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[#DFB743]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}