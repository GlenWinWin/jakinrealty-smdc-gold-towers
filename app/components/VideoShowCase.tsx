"use client";

import SimpleProtectedVideo from "./SimpleProtectedVideo";

interface VideoShowcaseProps {
  videoUrl?: string;
}

export default function VideoShowCase({
  videoUrl = "https://zz2dqnbskxk2ooan.public.blob.vercel-storage.com/Gold%20Residences.mp4",
}: VideoShowcaseProps) {
  return (
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

        <SimpleProtectedVideo src={videoUrl} />
      </div>
    </section>
  );
}