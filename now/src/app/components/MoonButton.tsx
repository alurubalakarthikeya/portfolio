"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import moonImage from "../assets/imgs/moon.png";
import sunImage from "../assets/imgs/sun.png";

export default function MoonButton() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-[60%] left-4 -translate-y-1/2 z-[60] cursor-pointer md:w-16 md:h-16 md:top-20 md:left-12 md:translate-y-0 w-11 h-11 md:w-10 md:h-10 overflow-hidden rounded-full opacity-50 md:opacity-50"
      aria-label="Toggle theme"
    >
      <Image
        src={theme === "dark" ? moonImage : sunImage}
        alt={theme === "dark" ? "Dark mode" : "Light mode"}
        fill
        className="object-cover scale-[0.98] md:scale-100"
      />
    </button>
  );
}
