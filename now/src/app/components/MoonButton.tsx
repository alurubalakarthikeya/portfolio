"use client";

import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import moonImage from "../assets/imgs/moon.png";
import sunImage from "../assets/imgs/sun.png";

export default function MoonButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-20 left-12 z-[999] cursor-pointer md:w-24 md:h-24 w-14 h-14 overflow-hidden rounded-full opacity-55"
      aria-label="Toggle theme"
    >
      <Image
        src={theme === "dark" ? moonImage : sunImage}
        alt={theme === "dark" ? "Dark mode" : "Light mode"}
        fill
        className="object-cover"
      />
    </button>
  );
}
