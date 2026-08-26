"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

interface ProtectedVideoProps {
  src: string;
  poster?: string;
}

export default function SimpleProtectedVideo({ src, poster }: ProtectedVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync fullscreen state if user presses Escape or uses browser controls
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        // Fullscreen the entire container so controls stay active
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen toggle error:", err);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-[#C59B27]/40 bg-black shadow-2xl group select-none ${
        isFullscreen ? "h-screen w-screen rounded-none border-none" : ""
      }`}
      onContextMenu={(e) => e.preventDefault()}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
        className="h-full w-full object-cover cursor-pointer"
      />

      {/* Floating Center Play Button */}
      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DFB743]/90 text-[#071324] shadow-lg transition-transform hover:scale-110 active:scale-95 z-20"
        >
          <Play className="h-7 w-7 fill-current ml-1" />
        </button>
      )}

      {/* Luxury Dark/Gold Control Bar */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="p-2 rounded-lg bg-[#C59B27] text-[#071324] hover:bg-[#DFB743] transition active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition active:scale-95"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-red-400" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition active:scale-95"
          aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}