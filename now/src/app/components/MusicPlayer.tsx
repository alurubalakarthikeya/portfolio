"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center gap-1.5 md:gap-2 w-full min-w-0 h-full">
      <span className="material-symbols-outlined text-[14px] md:text-[15px] text-[var(--site-accent)] flex-shrink-0" aria-hidden="true">
        music_note
      </span>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--site-foreground)] truncate leading-none">Lofi Beats</p>
      </div>

      <div className="flex items-end gap-[2px] h-4 flex-shrink-0" aria-hidden="true">
        {[0.55, 0.8, 0.65].map((scale, index) => (
          <motion.span
            key={index}
            className="w-[3px] rounded-full bg-[#10b981] origin-bottom"
            style={{ height: 16 }}
            animate={{ scaleY: isPlaying ? [scale, 1, 0.65, 0.95, scale] : scale }}
            transition={{ duration: 1.1, repeat: isPlaying ? Infinity : 0, ease: "easeInOut", delay: index * 0.15 }}
          />
        ))}
      </div>

      <button
        onClick={togglePlay}
        className="w-6 h-6 rounded-full bg-[var(--site-accent)] text-white flex items-center justify-center hover:bg-[var(--site-accent-hover)] transition-colors flex-shrink-0 ml-1"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        <span className="material-symbols-outlined text-[13px] leading-none">
          {isPlaying ? "pause" : "play_arrow"}
        </span>
      </button>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/music/lofi-beats.mp3"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
