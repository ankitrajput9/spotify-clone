import React from "react";

const MusicNav = () => {
  return (
    <div
      className="
        sticky top-0 z-20
        flex items-center gap-2
        px-4 py-3
        bg-black/70 backdrop-blur-md
        overflow-x-auto
        scrollbar-hide
      "
    >
      <NavButton label="All" />
      <NavButton label="Music" />
      <NavButton label="Podcast" />
    </div>
  );
};

const NavButton = ({ label }) => (
  <button
    className="
      shrink-0
      px-4 py-1.5
      rounded-full
      text-sm font-medium
      bg-gray-500/20
      hover:bg-gray-500/30
      transition
      whitespace-nowrap
    "
  >
    {label}
  </button>
);

export default MusicNav;
