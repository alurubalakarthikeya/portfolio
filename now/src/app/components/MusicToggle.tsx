"use client";

export default function MusicToggle({ onToggle, showMusic }: { onToggle: (showMusic: boolean) => void; showMusic: boolean }) {
  const handleToggle = () => {
    onToggle(!showMusic);
  };

  return (
    <button
      onClick={handleToggle}
      className="w-10 h-10 rounded-full bg-[var(--site-surface)]/90 backdrop-blur-md border border-[var(--site-border)] shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-[var(--site-surface)] transition-colors flex-shrink-0"
      aria-label="Toggle music player"
    >
      <span className="material-symbols-outlined text-[var(--site-accent)]">
        {showMusic ? "search" : "music_note"}
      </span>
    </button>
  );
}
