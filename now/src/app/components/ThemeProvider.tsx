"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: "dark",
    toggleTheme: () => { },
});

export function useTheme() {
    return useContext(ThemeContext);
}

const STORAGE_KEY = "portfolio-theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Read the theme already set by the inline script on html[data-theme]
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";
        const current = document.documentElement.dataset.theme as Theme | undefined;
        if (current === "light" || current === "dark") {
            return current;
        }
        // Mobile: dark mode, Desktop: light mode
        const isMobile = window.innerWidth < 768;
        return isMobile ? "dark" : "light";
    });

    // Keep data-theme in sync whenever theme changes
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            window.localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // ignore
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
