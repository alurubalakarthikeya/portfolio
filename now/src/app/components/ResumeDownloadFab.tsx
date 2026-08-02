"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import creeper1 from "../assets/forest assets/creeper-1.png";
import pixelatedArrow from "../assets/imgs/pixelated_arrow.png";
export default function ResumeDownloadFab() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [downloadCount, setDownloadCount] = useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    try {
      const stored = Number(window.localStorage.getItem("resumeDownloadCount") || "0");
      return !Number.isNaN(stored) && stored > 0 ? stored : 0;
    } catch {
      // Ignore storage errors and fallback to in-memory count.
      return 0;
    }
  });

  const triggerDownload = () => {
    const nextCount = downloadCount + 1;
    setDownloadCount(nextCount);
    try {
      window.localStorage.setItem("resumeDownloadCount", String(nextCount));
    } catch {
      // Ignore storage errors.
    }

    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "Aluru-Bala-Karthikeya-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
    setShowConfirm(false);
  };

  return (
    <>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 }}
        className="fixed right-6 bottom-6 z-50 flex items-center justify-center p-0 m-0"
      >
        <div className="relative group flex items-center justify-center">

          <motion.p
            className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-2xl border border-[var(--site-border)] bg-[var(--site-surface)] backdrop-blur-xl px-2.5 py-1 text-[9px] font-bold tracking-[0.07em] uppercase text-[var(--site-accent-hover)] shadow-[0_10px_24px_rgba(6,95,70,0.14)] opacity-0 translate-x-1 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
          >
            Download my resume
          </motion.p>
          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            aria-label="Open resume download confirmation"
            className="group relative h-10 w-10 flex items-center justify-center rounded-full border border-[var(--site-accent-ghost)] bg-[var(--site-accent)] text-white shadow-[0_8px_18px_rgba(6,95,70,0.2)] hover:scale-110 hover:bg-[var(--site-accent-hover)] active:scale-95 transition-all duration-300"
          >
            <Image
              src={pixelatedArrow}
              alt=""
              aria-hidden="true"
              className="block h-[18px] w-[18px] object-contain rotate-90 mx-auto my-auto"
            />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showConfirm ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-[var(--site-overlay)] px-4"
            onClick={() => setShowConfirm(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-sm rounded-[1.6rem] border border-[var(--site-accent-ghost)] bg-[var(--site-surface-strong)] p-5 shadow-[0_12px_32px_rgba(5,150,105,0.14)]"
            >
              <p className="text-[11px] tracking-[0.14em] uppercase text-emerald-800/75 font-bold">Resume Download</p>
              <h4 className="mt-2 text-xl font-black text-[var(--site-foreground)]">Do you want to download my resume?</h4>
              <p className="mt-3 text-sm text-[var(--site-muted)]">Downloads so far: <span className="font-bold text-[var(--site-foreground)]">{downloadCount}</span></p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={triggerDownload}
                  className="rounded-full bg-[var(--site-accent)] text-white font-semibold py-2.5 hover:bg-[var(--site-accent-hover)] transition-colors shadow-[0_6px_0_#059669] active:translate-y-0.5 active:shadow-[0_2px_0_#059669]"
                >
                  Download
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  className="rounded-full border border-[var(--site-border)] bg-[var(--site-surface)] text-[var(--site-foreground)] font-semibold py-2.5 hover:bg-[var(--site-surface-strong)] transition-colors"
                >
                  Leave
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
