"use client";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import mePhoto from "../assets/imgs/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  download?: string;
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
    { value: "26K+", label: "Followers @LinkedIn" },
    { value: "8+", label: "Deployed Projects" },
    { value: "123", label: "LeetCode Solves" },
    { value: "2000+", label: "GitHub Contributions" }
  ];

  return (
    <section id="hero" className="w-full relative flex items-center justify-center px-6 md:px-12 py-10 md:py-14 min-h-[70vh] md:min-h-0 scroll-mt-28">

      {/* Floating Stats Widget - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="hidden lg:block absolute left-12 -bottom-10 z-20"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-5 shadow-[0_12px_32px_rgba(16,185,129,0.12)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.2)] transition-all duration-200"
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
                <p className="text-2xl font-black text-[#10b981] leading-none">{stat.value}</p>
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
          <h1 className="text-5xl md:text-[4.8rem] font-extrabold font-headline tracking-tighter leading-[1.05] mb-6" style={{ color: 'var(--site-foreground)' }}>
            Hi. I&apos;m Karthikeya<span className="font-doto text-4xl sm:text-5xl md:text-7xl font-extrabold rubber-spin-dot inline-flex items-center justify-center w-[1em] h-[1em] leading-none align-middle text-[#10b981]">+</span><br />
            <span className="text-[#10b981] md:text-[#10b981] md:text-[2.9rem]">DevOps &amp; ServiceNow Developer</span>
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
        </motion.div>
      </div>

    </section>
  );
}
