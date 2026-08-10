"use client";

import { useState } from "react";
import MusicToggle from "./MusicToggle";
import HomeQuickSearch from "./HomeQuickSearch";

export default function MusicToggleWrapper() {
  const [showMusicPlayer, setShowMusicPlayer] = useState(true);

  return (
    <div className="fixed top-5 left-[47.5%] md:left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 md:gap-2.5">
      <MusicToggle onToggle={setShowMusicPlayer} showMusic={showMusicPlayer} />
      <HomeQuickSearch showMusicPlayer={showMusicPlayer} />
    </div>
  );
}
