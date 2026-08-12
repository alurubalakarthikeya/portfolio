"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

const allSongs = [
  { title: "Hans Zimmer - F1", src: "/music/Hans%20Zimmer%20-%20F1.mp3" },
  { title: "Hans Zimmer - No Time for Caution", src: "/music/Hans%20Zimmer%20-%20No%20Time%20for%20Caution.mp3" },
  { title: "Hans Zimmer - Time", src: "/music/Hans%20Zimmer%20-%20Time.mp3" },
  { title: "Kensuke Ushio - In The Pool", src: "/music/In%20The%20Pool%20-%20Kensuke.mp3" },
  { title: "Paul Haslinger - Worlds Beyond Our Senses", src: "/music/Paul%20Haslinger%20-%20Worlds%20Beyond%20Our%20Senses.mp3" },
  { title: "Alexandre Desplat - The Imitation Game", src: "/music/The%20Imitation%20Game.mp3" },
  { title: "Tony Ann - ICARUS", src: "/music/Tony%20Ann%20-%20ICARUS%20(feat.%20ARKAI).mp3" },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const shuffledSongs = useMemo(() => shuffleArray(allSongs), []);

  const currentSong = shuffledSongs[currentSongIndex];

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

  const playNextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % shuffledSongs.length);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current && containerRef.current) {
        const textWidth = textRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        setIsTextOverflowing(textWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [currentSong.title]);

  return (
    <div className="flex items-center gap-1.5 md:gap-2 w-full min-w-0 h-full">
      <span className="material-symbols-outlined text-[14px] md:text-[15px] text-[var(--site-accent)] flex-shrink-0" aria-hidden="true">
        music_note
      </span>

      <div className="flex-1 min-w-0 overflow-hidden" ref={containerRef}>
        <motion.p
          ref={textRef}
          className="text-sm font-semibold text-[var(--site-foreground)] whitespace-nowrap leading-none inline-block"
          animate={isTextOverflowing && isPlaying ? {
            x: ["0%", "-50%"],
          } : {}}
          transition={isTextOverflowing && isPlaying ? {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          } : {}}
        >
          {currentSong.title}
          {isTextOverflowing && <span className="mx-4">{currentSong.title}</span>}
        </motion.p>
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
        src={currentSong.src}
        onEnded={playNextSong}
      />
    </div>
  );
}
