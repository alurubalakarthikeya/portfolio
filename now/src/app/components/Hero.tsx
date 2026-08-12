"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  download?: string;
}

function CasinoNumber({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [value]);

  const formatted = displayValue.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  return (
    <span className="inline-flex items-end tabular-nums leading-none">
      <span>{formatted}</span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}

function MagneticButton({ children, className, href, target, rel, download }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      download={download}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ translateX: mouseX, translateY: mouseY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const stats = [
    { value: 10, suffix: "+", label: "Deployed Projects" },
    { value: 2000, suffix: "+", label: "GitHub Contributions" },
    { value: 26, suffix: "K+", label: "@LinkedIn" },
    { value: 128, suffix: "", label: "LeetCode Solves" },
  ];

  return (
    <section id="hero" className="w-full relative flex items-center justify-center px-6 md:px-12 pt-28 pb-10 md:pt-14 md:py-14 min-h-[70vh] md:min-h-0 scroll-mt-28">

      {/* Floating Stats Widget - Left Side (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="hidden lg:block absolute left-1 -bottom-10 z-20"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white/5 backdrop-blur-xl scale-85 rounded-2xl border border-white/10 p-6 shadow-[0_12px_32px_rgba(16,185,129,0.12)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.2)] transition-all duration-200"
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="bg-[var(--site-card-bg-strong)]/50 rounded-xl p-3 border border-[var(--site-border)]/50 hover:border-[#10b981]/30 transition-all duration-200"
              >
                <motion.p
                  initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.45 + index * 0.12, ease: "easeOut" }}
                  className="text-2xl font-black text-[#10b981] leading-none tabular-nums"
                >
                  <CasinoNumber value={stat.value} suffix={stat.suffix} />
                </motion.p>
                <p className="text-[10px] tracking-[0.12em] uppercase font-bold text-[var(--text-secondary)] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center relative z-10 min-h-[60vh] md:min-h-0">

        {/* Massive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-[4.8rem] font-extrabold font-headline tracking-tighter leading-[1.05] mb-6" style={{ color: 'var(--site-foreground)' }}>
            Hi. I&apos;m Karthikeya<span className="font-doto text-4xl sm:text-5xl md:text-7xl font-extrabold rubber-spin-dot inline-flex items-center justify-center w-[1em] h-[1em] leading-none align-middle text-[#10b981]">+</span><br />
            <span className="text-[#10b981] md:text-[#10b981] md:text-[2.9rem]">DevOps &amp; ServiceNow Developer</span>
          </h2>

          <p className="text-lg md:text-xl font-body leading-relaxed mb-6 max-w-2xl mx-auto font-medium" style={{ color: 'var(--site-muted-strong)' }}>
            I turn ideas into production-ready applications through automation, thoughtful design, and modern development.
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
            <MagneticButton
              href="/work"
              className="group relative bg-[#10b981]/90 backdrop-blur-md text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-headline font-bold text-base md:text-lg shadow-[0_6px_0_#059669] hover:shadow-[0_10px_0_#059669] active:shadow-none transition-all duration-200 border border-[#10b981]/45 overflow-hidden"
            >
              <span className="relative z-10">Explore Work</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </MagneticButton>
          </div>

          {/* Mobile Stats Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="md:hidden mt-8"
          >
            <div className="bg-[var(--site-card-bg)]/80 backdrop-blur-xl rounded-2xl border border-[var(--site-border)] p-4 shadow-[0_8px_24px_rgba(16,185,129,0.1)]">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08, ease: "easeOut" }}
                    className="bg-[var(--site-card-bg-strong)]/60 rounded-xl p-3 border border-[var(--site-border)]/50"
                  >
                    <p className="text-xl font-black text-[#10b981] leading-none">{stat.value}{stat.suffix}</p>
                    <p className="text-[9px] tracking-[0.1em] uppercase font-bold text-[var(--text-secondary)] mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
