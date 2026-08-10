"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && audioRef.current) {
      interval = setInterval(() => {
        if (audioRef.current) {
          const current = audioRef.current.currentTime;
          const duration = audioRef.current.duration;
          if (duration) {
            setProgress((current / duration) * 100);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

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
    <div className="flex items-center gap-2 w-full">
      {/* Play Button */}
      <button
        onClick={togglePlay}
        className="w-7 h-7 rounded-full bg-[var(--site-accent)] text-white flex items-center justify-center hover:bg-[var(--site-accent-hover)] transition-colors flex-shrink-0"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        <span className="material-symbols-outlined text-sm">
          {isPlaying ? "pause" : "play_arrow"}
        </span>
      </button>

      {/* Track Info - Minimal */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-[var(--site-foreground)] truncate">Lofi Beats</p>
      </div>

      {/* Progress Bar - Tiny */}
      <div className="w-12 h-1 bg-[var(--site-border)] rounded-full overflow-hidden flex-shrink-0">
        <div
          className="h-full bg-[#10b981] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/music/lofi-beats.mp3"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
