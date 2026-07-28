"use client";

import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full border border-[var(--site-border-strong)] bg-[var(--site-surface-strong)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] inline-flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(16,185,129,0.28)] group cursor-pointer"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.span
                        key="sun"
                        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="material-symbols-outlined text-[1.35rem] leading-none text-[var(--site-accent)]"
                        aria-hidden="true"
                    >
                        light_mode
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="material-symbols-outlined text-[1.35rem] leading-none text-[var(--site-accent)]"
                        aria-hidden="true"
                    >
                        dark_mode
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}
