import type { Metadata } from "next";
import Link from "next/link";

const interests = ["Drawing", "Reading news", "Learning new things", "Music", "Wikipedia", "History", "Art", "Psychology"];
const favorites = [
  { label: "MBTI", value: "INTJ-ish, but with a builder streak" },
  { label: "Fav movies", value: "The Social Network, Interstellar, Her" },
  { label: "Fav songs", value: "Night drives, lo-fi sets, and anything with a warm synth" },
  { label: "Weekend reset", value: "A quiet playlist, a sketchpad, and a long walk" },
];
const quickFacts = ["Coffee over soda", "Notebook over notes app", "Cloudy evening walks", "Soft synths", "Clean interfaces", "Curiosity first"];
const friends = [
  {
    name: "Friend Name",
    domain: "Domain / vibe",
    characteristic: "What makes them stand out",
    funStuff: "A funny detail, shared ritual, or inside joke",
    href: "https://example.com",
  },
  {
    name: "Friend Name",
    domain: "Domain / vibe",
    characteristic: "What makes them stand out",
    funStuff: "A funny detail, shared ritual, or inside joke",
    href: "https://example.com",
  },
  {
    name: "Friend Name",
    domain: "Domain / vibe",
    characteristic: "What makes them stand out",
    funStuff: "A funny detail, shared ritual, or inside joke",
    href: "https://example.com",
  },
];

const currentLikes = ["Late-night walks", "Tiny interface details", "Ambient loops", "Long deep-dive videos", "Random notebooks", "Maps and city planning"];
const tinyTimeline = [
  { label: "Morning", value: "Coffee, messages, quick planning." },
  { label: "Evening", value: "Music, sketches, and one more tab than needed." },
  { label: "Weekend", value: "A reset day, a long walk, and a movie." },
];

export const metadata: Metadata = {
  title: "Easter",
  description: "A playful personal side page with interests, friends, and off-work details.",
};

export default function EasterPage() {
  return (
    <main className="relative isolate flex-1 overflow-hidden px-6 md:px-12 pt-28 pb-24 md:pt-32 md:pb-32 min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_70%_78%,rgba(16,185,129,0.12),transparent_36%)]" />
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-[#10b981]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-[#0f766e]/20 blur-3xl" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)]/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,15,36,0.16)] p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">
                Easter egg
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--site-foreground)] leading-[1.02]">
                The human side
              </h1>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--site-muted-strong)] font-medium">
                A quieter page for the things that are not strictly work: interests, taste, people, and the little routines that usually stay off the resume.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex w-fit rounded-full border border-[var(--site-border)] bg-[var(--site-surface-strong)] px-5 py-3 text-sm font-bold text-[var(--site-foreground)] transition-colors hover:border-[#10b981]/30 hover:text-[#10b981]"
            >
              Back home
            </Link>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)]/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,15,36,0.16)] p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">Interests</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {interests.map((item) => (
                <span key={item} className="rounded-full border border-[var(--site-border)] bg-[var(--site-surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--site-foreground)]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {favorites.map((item) => (
                <article key={item.label} className="rounded-[1.4rem] border border-[var(--site-border)] bg-[var(--site-surface-strong)]/80 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">{item.label}</p>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-[var(--site-foreground)] font-semibold">{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)]/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,15,36,0.16)] p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">Quick facts</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {quickFacts.map((item) => (
                <span key={item} className="rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#10b981]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-surface-strong)]/85 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">Tiny note</p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--site-muted-strong)] font-medium">
                This page is meant to feel like the rest of the portfolio, just a little more personal and a lot less formal.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)]/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,15,36,0.16)] p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">Currently into</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {currentLikes.map((item) => (
                <span key={item} className="rounded-full border border-[var(--site-border)] bg-[var(--site-surface-strong)] px-3 py-1.5 text-xs font-semibold text-[var(--site-foreground)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)]/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,15,36,0.16)] p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">Tiny timeline</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {tinyTimeline.map((item) => (
                <article key={item.label} className="rounded-[1.25rem] border border-[var(--site-border)] bg-[var(--site-surface-strong)]/80 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--site-muted-strong)]">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

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

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
      </div>
    </main>
  );
}