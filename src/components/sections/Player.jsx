import { Heart, Shuffle, Split } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { TiArrowLoop } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { PlayorPause, setcurrentSong } from "../../features/songSlice";
import { FcLikePlaceholder } from "react-icons/fc";
import { removeLiked, setLiked } from "../../features/likedsongSlice";
import { useNavigate } from "react-router";

const Player = () => {
  const [seek, setSeek] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const { songs } = useSelector((state) => state.data);
  const { currentSong, isPlaying } = useSelector((state) => state.music);
  const { liked } = useSelector((state) => state.liked);

  const dispatch = useDispatch();
  const audioref = useRef(null);
  const navigate = useNavigate()

  /* Play / Pause */
  useEffect(() => {
    if (!audioref.current) return;
    isPlaying ? audioref.current.play() : audioref.current.pause();
  }, [currentSong, isPlaying]);

  const formatTime = (time) => {
    if (!time) return "00:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleNext = () => {
    let nextsong = songs.find((v) => v.id === currentSong?.id + 1);
    if (!nextsong) nextsong = songs[0];
    dispatch(setcurrentSong(nextsong));
  };

  const handlePrevious = () => {
    let previous = songs.find((v) => v.id === currentSong?.id - 1);
    if (!previous) previous = songs[songs.length - 1];
    dispatch(setcurrentSong(previous));
  };

  const handleLike = () => dispatch(setLiked(currentSong));
  const handleremove = () => dispatch(removeLiked(currentSong));

  return (
    <footer
   
      className="
        w-full
        text-white
        px-3 sm:px-6 py-2
        flex flex-row sm:flex
        items-center gap-3
        fixed bottom-0 left-0 z-50
        bg-[#0b0a12]

        before:absolute before:inset-0
        before:bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.18),transparent_55%)]
        before:pointer-events-none
      "
    >
      {/* LEFT — SONG CARD (mobile + desktop) */}
      <div  onClick={()=>navigate("/home/player")} className="flex items-center gap-4 w-full sm:w-[30%]">
        <img
          src={currentSong?.img || "/music-placeholder.png"}
          alt=""
          className="h-12 w-12 rounded object-cover"
        />

        <div className="truncate">
          <h1 className="text-sm font-medium truncate">
            {currentSong?.title || "No song playing"}
          </h1>
          <p className="text-xs text-gray-400 truncate">
            {currentSong?.artist || ""}
          </p>
        </div>

        {currentSong &&
          (liked.find((v) => v.id === currentSong.id) ? (
            <button onClick={handleremove} className="ml-2">
              <FcLikePlaceholder size={24} />
            </button>
          ) : (
            <button onClick={handleLike} className="ml-2">
              <Heart size={22} />
            </button>
          ))}
      </div>

      {/* CENTER — CONTROLS (desktop only) */}
      <div className="hidden sm:flex flex-col items-center w-[40%]">
        <div className="flex items-center gap-4">
          <button className="text-gray-500">
               <Shuffle size={18} />

          </button>

          <button onClick={handlePrevious}>
            <IoPlaySkipBackSharp size={22} />
          </button>

          <button onClick={() => dispatch(PlayorPause())}>
            {isPlaying ? (
              <FaPauseCircle size={38} />
            ) : (
              <FaPlayCircle size={38} />
            )}
          </button>

          <button onClick={handleNext}>
            <IoPlaySkipForward size={22} />
          </button>

          <button className="text-gray-500">
            <TiArrowLoop size={18} />
          </button>
        </div>

        {/* SEEK BAR (desktop only) */}
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
            className="w-full"
          />

          <span className="text-xs">{formatTime(duration)}</span>
        </div>
      </div>

      {/* RIGHT — PLAY / PAUSE (mobile only) */}
      <div className="ml-auto sm:hidden">
        <button onClick={() => dispatch(PlayorPause())}>
          {isPlaying ? (
            <FaPauseCircle size={36} />
          ) : (
            <FaPlayCircle size={36} />
          )}
        </button>
      </div>

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
