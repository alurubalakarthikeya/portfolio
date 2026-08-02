"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section id="hero" className="w-full relative flex items-center justify-center px-6 md:px-12 py-10 md:py-14 min-h-[70vh] md:min-h-0 scroll-mt-28">

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center relative z-10 min-h-[60vh] md:min-h-0">

        {/* Massive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-[4.8rem] font-extrabold font-headline tracking-tighter leading-[1.05] mb-6" style={{ color: 'var(--site-foreground)' }}>
            Hi. I&apos;m Karthikeya<span className="font-doto text-4xl sm:text-5xl md:text-7xl font-extrabold rubber-spin-dot inline-flex items-center justify-center w-[1em] h-[1em] leading-none align-middle text-[#10b981]">+</span><br />
            <span className="text-[#10b981] md:text-[#10b981] md:text-[2.9rem]">DevOps &amp; ServiceNow <span className="md:text-white">Developer</span></span>
          </h1>

          <p className="text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl mx-auto font-medium" style={{ color: 'var(--site-muted-strong)' }}>
            I build &amp; deploy production level apps with clean, sleek UI, and I&apos;m deeply passionate about ServiceNow solutions.
          </p>

          <div className="md:hidden flex gap-5 justify-center mb-8">
            <a
              className="transition-colors hover:text-[#10b981]"
              style={{ color: 'var(--site-muted)' }}
              href="mailto:alurubalakarthikeya@gmail.com"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-16 h-16" aria-hidden="true" />
            </a>
            <a
              className="transition-colors hover:text-[#10b981]"
              style={{ color: 'var(--site-muted)' }}
              href="https://linkedin.com/in/alurubalakarthikeya"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-16 h-16" aria-hidden="true" />
            </a>
            <a
              className="transition-colors hover:text-[#10b981]"
              style={{ color: 'var(--site-muted)' }}
              href="https://github.com/alurubalakarthikeya"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-16 h-16" aria-hidden="true" />
            </a>
            <a
              className="transition-colors hover:text-[#10b981]"
              style={{ color: 'var(--site-muted)' }}
              href="https://x.com/abalakarthikeya"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-16 h-16" aria-hidden="true" />
            </a>
            <a
              className="transition-colors hover:text-[#10b981]"
              style={{ color: 'var(--site-muted)' }}
              href="https://youtube.com/@cartyk"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} className="w-16 h-16" aria-hidden="true" />
            </a>
          </div>

          <div className="relative flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* ServiceNow-styled Mega Button */}
            <Link href="/work"
              className="group relative bg-[#10b981]/90 backdrop-blur-md text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-headline font-bold text-base md:text-lg hover:-translate-y-1 shadow-[0_6px_0_#059669] hover:shadow-[0_8px_0_#059669] active:translate-y-2 active:shadow-none transition-all duration-200 border border-[#10b981]/45"
            >
              Explore Work
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
