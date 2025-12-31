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
    w-70 xl:w-70
    h-full
    border-l border-black
    overflow-y-auto
    rounded-lg

    /* Background effect */
    bg-[#0b0f0c]
    relative
    before:absolute before:inset-0
    before:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_45%)]
    before:pointer-events-none
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
