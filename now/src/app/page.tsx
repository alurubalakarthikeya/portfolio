import type { Metadata } from "next";
import Hero from "./components/Hero";
import HomeBackground from "./components/HomeBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="relative flex-1 flex flex-col justify-center overflow-hidden pb-28 md:pb-8 min-h-screen">
      <HomeBackground quality="lite" />
      <div className="relative z-10 flex-1 flex items-center">
        <Hero />
      </div>
      <footer className="fixed bottom-6 inset-x-6 lg:inset-x-8 z-20 pointer-events-none">
        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-5 text-center md:text-left">

          <div className="pointer-events-auto bg-[var(--site-surface)]/20 backdrop-blur-xl border border-[var(--site-border)] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-2xl p-4 md:px-6 flex flex-col items-center md:items-start gap-1 transition-all duration-300 hover:bg-[var(--site-surface)]/40 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
            <p className="font-bold text-xs md:text-sm tracking-wide" style={{ color: 'var(--site-foreground)' }}>Aluru Bala Karthikeya</p>
            <p className="text-[10px] uppercase font-semibold text-[var(--site-accent)] tracking-wider">© 2026 Rights Reserved</p>
          </div>

          <div className="pointer-events-auto hidden md:flex bg-[var(--site-surface)]/20 backdrop-blur-xl border border-[var(--site-border)] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-2xl p-3 px-5 flex-col gap-2 items-center md:items-end transition-all duration-300 hover:bg-[var(--site-surface)]/40 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
            <p className="font-bold text-sm tracking-wide" style={{ color: 'var(--site-foreground)' }}>My Socials</p>
            <div className="flex gap-4 md:gap-5 justify-center md:justify-end">
              <a
                className="transition-all hover:text-white hover:-translate-y-1"
                style={{ color: 'var(--site-muted)' }}
                href="mailto:alurubalakarthikeya@gmail.com"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
              <a
                className="transition-all hover:text-white hover:-translate-y-1"
                style={{ color: 'var(--site-muted)' }}
                href="https://linkedin.com/in/alurubalakarthikeya"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
              <a
                className="transition-all hover:text-white hover:-translate-y-1"
                style={{ color: 'var(--site-muted)' }}
                href="https://github.com/alurubalakarthikeya"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
              <a
                className="transition-all hover:text-white hover:-translate-y-1"
                style={{ color: 'var(--site-muted)' }}
                href="https://x.com/abalakarthikeya"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
              <a
                className="transition-all hover:text-white hover:-translate-y-1"
                style={{ color: 'var(--site-muted)' }}
                href="https://youtube.com/@cartyk"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
