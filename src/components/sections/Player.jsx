import { Split } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaPlayCircle, FaRegHeart, FaPauseCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { TiArrowLoop } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { PlayorPause } from "../../features/songSlice";
import { toggleLike } from "../../features/dataSlice";

const Player = () => {
  const [seek, setSeek] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const { currentSong, isPlaying } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  const audioref = useRef(null);

  // Play / Pause handler
  useEffect(() => {
    if (!audioref.current) return;

    if (currentSong && isPlaying) {
      audioref.current.play();
    } else {
      audioref.current.pause();
    }
  }, [currentSong, isPlaying]);

  const formatTime = (time) => {
    if (!time) return "00:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <footer className="w-full bg-black text-white px-3 sm:px-6 py-2 flex flex-col sm:flex-row items-center gap-3">

      {/* LEFT — SONG INFO (hidden on mobile if no song) */}
      <div className="hidden sm:flex items-center gap-4 w-[30%]">
        <img
          src={currentSong?.img || "/music-placeholder.png"}
          alt=""
          className="h-12 w-12 object-cover rounded"
        />

        <div className="truncate">
          <h1 className="text-sm font-medium truncate">
            {currentSong?.title || "No song playing"}
          </h1>
          <p className="text-xs text-gray-400 truncate">
            {currentSong?.artist || ""}
          </p>
        </div>

        {currentSong && (
          <button
            onClick={() => dispatch(toggleLike(currentSong.id))}
            className="ml-2"
          >
            {currentSong.liked ? (
              <FaHeart className="text-green-500" />
            ) : (
              <FaRegHeart className="text-gray-400" />
            )}
          </button>
        )}
      </div>

      {/* CENTER — CONTROLS */}
      <div className="flex flex-col items-center w-full sm:w-[40%]">
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-gray-500">
            <Split size={18} />
          </button>

          <button>
            <IoPlaySkipBackSharp size={22} />
          </button>

          <button
            onClick={() => dispatch(PlayorPause())}
            className="text-white"
          >
            {isPlaying ? (
              <FaPauseCircle size={38} />
            ) : (
              <FaPlayCircle size={38} />
            )}
          </button>

          <button>
            <IoPlaySkipForward size={22} />
          </button>

          <button className="hidden sm:block text-gray-500">
            <TiArrowLoop size={18} />
          </button>
        </div>

        {/* SEEK BAR */}
        <div className="flex items-center gap-2 w-full mt-2">
          <span className="text-xs">{formatTime(current)}</span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={seek}
            onChange={(e) => {
              const val = Number(e.target.value);
              audioref.current.currentTime = val;
              setSeek(val);
            }}
            className="w-full cursor-pointer"
          />

          <span className="text-xs">{formatTime(duration)}</span>
        </div>
      </div>

      {/* RIGHT — EMPTY (reserved for future controls) */}
      <div className="hidden sm:block w-[30%]" />

      {/* AUDIO */}
      <audio
        ref={audioref}
        src={currentSong?.songUrl}
        onTimeUpdate={(e) => {
          setCurrent(e.target.currentTime);
          setSeek(e.target.currentTime);
        }}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
      />
    </footer>
  );
};

export default Player;
