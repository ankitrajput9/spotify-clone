import React from "react";
import { useSelector } from "react-redux";

const ArtistCard = () => {
  const { currentSong } = useSelector((state) => state.music);

  if (!currentSong) return null;

  return (
    <div className="w-full mt-4">
      <div className="relative rounded-xl overflow-hidden">

        {/* ARTIST IMAGE */}
        <img
          src={currentSong.artistImg}
          alt={currentSong.artist}
          className="w-full aspect-4/3 object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* TEXT */}
        <h1 className="absolute bottom-3 left-3 text-white text-lg font-semibold truncate">
          {currentSong.artist}
        </h1>
      </div>
    </div>
  );
};

export default ArtistCard;
