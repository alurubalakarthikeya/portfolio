"use client";

import { useMemo } from "react";

const allFriends = [
  {
    name: "Arji Jethin Naga Sai Eswar",
    domain: "Full Stack",
    characteristic: "Intense problem solving skills and creative decision making skill",
    funStuff: "Funny yet serious",
    href: "https://example.com",
  },
  {
    name: "Ayush Singh",
    domain: "Data Engineer",
    characteristic: "Solving complex things",
    funStuff: "Funny: making things complex",
    href: "https://example.com",
  },
  {
    name: "Bhaanu Modepalli",
    domain: "Full Stack",
    characteristic: "Potential builder with solving capabilities",
    funStuff: "Always learning something new",
    href: "https://example.com",
  },
];

// Shuffle array function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function FriendsSection() {
  const friends = useMemo(() => shuffleArray(allFriends), []);

  return (
    <section className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)]/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,15,36,0.16)] p-6 md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">Friends</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--site-foreground)]">People I keep close</h2>
        </div>
        <p className="max-w-2xl text-sm md:text-base leading-relaxed text-[var(--site-muted-strong)] font-medium">
          A few people worth a click-through, with quick notes on what they do and why they matter.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {friends.map((friend) => (
          <article key={friend.name + friend.href} className="group rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-surface-strong)]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#10b981]/30 hover:shadow-[0_16px_36px_rgba(16,185,129,0.12)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-extrabold text-[var(--site-foreground)]">{friend.name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#10b981]">{friend.domain}</p>
              </div>
              <a
                href={friend.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#10b981] transition-colors hover:bg-[#10b981]/15"
              >
                Portfolio
              </a>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[var(--site-muted-strong)]">
              <span className="font-bold text-[var(--site-foreground)]">Characteristic:</span> {friend.characteristic}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--site-muted-strong)]">
              <span className="font-bold text-[var(--site-foreground)]">Fun stuff:</span> {friend.funStuff}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
