import type { Metadata } from "next";
import Link from "next/link";
import { FriendsSection } from "./components/FriendsSection";

const interests = ["Drawing", "Reading news", "Learning new things", "Music", "Wikipedia", "History", "Art", "Psychology"];
const favorites = [
  { label: "MBTI", value: "INTJ-ish, but with a builder streak" },
  { label: "Fav movies", value: "The Social Network, Interstellar, Her" },
  { label: "Fav songs", value: "Night drives, lo-fi sets, and anything with a warm synth" },
  { label: "Weekend reset", value: "A quiet playlist, a sketchpad, and a long walk" },
];
const quickFacts = ["Coffee over soda", "Notebook over notes app", "Cloudy evening walks", "Soft synths", "Clean interfaces", "Curiosity first"];

const artworks = [
  { title: "Digital sketches", description: "Quick character studies and environment concepts done during breaks" },
  { title: "Photography", description: "Street photography and architectural details from city walks" },
  { title: "UI experiments", description: "Small interface explorations and design system iterations" },
];

const writings = [
  { title: "Technical blog posts", description: "Thoughts on development patterns and system design" },
  { title: "Creative writing", description: "Short stories and narrative experiments" },
  { title: "Design essays", description: "Analysis of interfaces and user experience patterns" },
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

        <section className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)]/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,15,36,0.16)] p-6 md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">Artworks</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--site-foreground)]">Creative explorations</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {artworks.map((artwork) => (
              <article key={artwork.title} className="rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-surface-strong)]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#10b981]/30 hover:shadow-[0_16px_36px_rgba(16,185,129,0.12)]">
                <p className="text-lg font-extrabold text-[var(--site-foreground)]">{artwork.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--site-muted-strong)]">{artwork.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-surface)]/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,15,36,0.16)] p-6 md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10b981]">Writings</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--site-foreground)]">Words and thoughts</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {writings.map((writing) => (
              <article key={writing.title} className="rounded-[1.5rem] border border-[var(--site-border)] bg-[var(--site-surface-strong)]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#10b981]/30 hover:shadow-[0_16px_36px_rgba(16,185,129,0.12)]">
                <p className="text-lg font-extrabold text-[var(--site-foreground)]">{writing.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--site-muted-strong)]">{writing.description}</p>
              </article>
            ))}
          </div>
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

        <FriendsSection />
      </div>
    </main>
  );
}