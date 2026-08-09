"use client";

import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const PixelSun = () => (
    <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" style={{ shapeRendering: 'crispEdges' }}>
        <rect x="7" y="1" width="2" height="2" />
        <rect x="7" y="13" width="2" height="2" />
        <rect x="1" y="7" width="2" height="2" />
        <rect x="13" y="7" width="2" height="2" />
        <rect x="3" y="3" width="2" height="2" />
        <rect x="11" y="11" width="2" height="2" />
        <rect x="3" y="11" width="2" height="2" />
        <rect x="11" y="3" width="2" height="2" />
        <rect x="5" y="5" width="6" height="6" />
    </svg>
);

const PixelMoon = () => (
    <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" style={{ shapeRendering: 'crispEdges' }}>
        <rect x="8" y="2" width="4" height="2" />
        <rect x="6" y="4" width="2" height="2" />
        <rect x="12" y="4" width="2" height="2" />
        <rect x="4" y="6" width="2" height="6" />
        <rect x="12" y="6" width="2" height="4" />
        <rect x="10" y="10" width="2" height="2" />
        <rect x="6" y="12" width="4" height="2" />
    </svg>
);

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="fixed bottom-6 left-6 lg:hidden z-[100] h-10 w-10 rounded-full border border-[var(--site-border-strong)] bg-[var(--site-surface-strong)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(16,185,129,0.28)] group cursor-pointer"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.span
                        key="sun"
                        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="text-[1.25rem] leading-none text-[#fbbf24] flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <PixelSun />
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="text-[1.25rem] leading-none text-slate-700 flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <PixelMoon />
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}
