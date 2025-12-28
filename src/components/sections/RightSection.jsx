import React from "react";
import { useSelector } from "react-redux";
import ArtistCard from "../cards/ArtistCard";

const RightSection = () => {
  const { currentSong } = useSelector((state) => state.music);

  return (
    <aside
      id="rightscroll"
      className="
        hidden lg:flex
        flex-col
        w-72 xl:w-80
        h-full
        bg-black/90
        border-l border-black
        overflow-y-auto
      "
    >
      <div className="flex flex-col items-center px-4 py-6 gap-4">

        {/* IMAGE */}
        <div className="w-full aspect-square rounded-xl overflow-hidden">
          <img
            src={currentSong?.img || "/images/music-placeholder.webp"}
            alt="Now Playing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ARTIST CARD */}
        {currentSong && <ArtistCard />}

        {/* FALLBACK TEXT */}
        {!currentSong && (
          <p className="text-gray-400 text-sm text-center mt-4">
            No song playing
          </p>
        )}

      </div>
    </aside>
  );
};

export default RightSection;
