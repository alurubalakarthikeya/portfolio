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
      <footer className="absolute bottom-0 inset-x-0 z-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-7 md:pb-8 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-5 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-bold text-base md:text-lg" style={{ color: 'var(--site-foreground)' }}>Aluru Bala Karthikeya</p>
            <p className="text-xs md:text-sm font-medium text-[#10b981]">@2026 rights reserved.</p>
          </div>

          <div className="hidden md:flex flex-col gap-2 items-end">
            <p className="font-bold text-lg" style={{ color: 'var(--site-foreground)' }}>My Socials</p>
            <div className="flex gap-5 justify-end">
              <a
                className="transition-colors hover:text-[#10b981]"
                style={{ color: 'var(--site-muted)' }}
                href="mailto:alurubalakarthikeya@gmail.com"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                className="transition-colors hover:text-[#10b981]"
                style={{ color: 'var(--site-muted)' }}
                href="https://linkedin.com/in/alurubalakarthikeya"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                className="transition-colors hover:text-[#10b981]"
                style={{ color: 'var(--site-muted)' }}
                href="https://github.com/alurubalakarthikeya"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                className="transition-colors hover:text-[#10b981]"
                style={{ color: 'var(--site-muted)' }}
                href="https://x.com/abalakarthikeya"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                className="transition-colors hover:text-[#10b981]"
                style={{ color: 'var(--site-muted)' }}
                href="https://youtube.com/@cartyk"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
