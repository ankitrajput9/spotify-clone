import React from "react";
import { FaPauseCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setcurrentSong, PlayorPause } from "../../features/songSlice";

const Songcard = ({ elem }) => {
  const dispatch = useDispatch();
  const { currentSong, isPlaying } = useSelector((state) => state.music);

  const isCurrent = currentSong?.id === elem.id;

  const handlePlayPause = (e) => {
    e.stopPropagation(); // 🔴 IMPORTANT (prevents future routing issues)
    isCurrent
      ? dispatch(PlayorPause())
      : dispatch(setcurrentSong(elem));
  };

  return (
    <div
      className={`
        group
        rounded-lg
        p-3
        cursor-pointer
        transition
        bg-gray-400/10
        hover:bg-gray-400/20
        ${isCurrent ? "ring-1 ring-green-500/60" : ""}
      `}
    >
      {/* IMAGE */}
      <div className="relative aspect-square rounded-md overflow-hidden">
        <img
          src={elem.img}
          alt={elem.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* PLAY / PAUSE */}
        <button
          onClick={handlePlayPause}
          aria-label={isCurrent && isPlaying ? "Pause song" : "Play song"}
          className="
            absolute bottom-2 right-2
            transition
            opacity-100
            sm:opacity-0
            sm:group-hover:opacity-100
            scale-95 hover:scale-100
          "
        >
          {isCurrent && isPlaying ? (
            <FaPauseCircle size={42} className="text-green-500 drop-shadow-lg" />
          ) : (
            <FaCirclePlay size={42} className="text-green-500 drop-shadow-lg" />
          )}
        </button>
      </div>

      {/* INFO */}
      <div className="mt-3">
        <h1 className="text-sm sm:text-base font-semibold text-white truncate">
          {elem.title}
        </h1>
        <p className="text-xs text-gray-400 truncate">
          {elem.artist}
        </p>
      </div>
    </div>
  );
};

export default Songcard;
