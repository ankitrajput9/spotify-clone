import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { TiArrowLoop } from "react-icons/ti";
import { Shuffle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { PlayorPause, setcurrentSong } from "../features/songSlice";

const Mainplayer = () => {
  const { currentSong, isPlaying } = useSelector((state) => state.music);
  const { songs } = useSelector((state) => state.data);
  const dispatch = useDispatch();

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

  const handlePlay = () => {
    dispatch(PlayorPause());
    dispatch(setcurrentSong(currentSong));
    
  };

  return (
    <div className=" rounded-xl relative w-full h-screen bg-black text-white overflow-hidden">
      
      {/* Background Image */}
      <img
        src={currentSong?.img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-xl "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/90" />

      {/* Player Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-8">

        {/* Song Info */}
        <div className="flex flex-col items-center mt-10 sm:mt-16 text-center">
          <img
            src={currentSong?.img}
            alt=""
            className="w-52 h-52 sm:w-64 sm:h-64 rounded-xl shadow-2xl object-cover"
          />
          <h2 className="mt-5 text-lg sm:text-xl font-semibold">
            {currentSong?.title || "Song Title"}
          </h2>
          <p className="text-sm text-gray-300">
            {currentSong?.artist || "Artist Name"}
          </p>
        </div>

        {/* Controls */}
        <div className="mb-10 sm:mb-18">
          <div className="flex items-center justify-center gap-6 sm:gap-8">

            <button className="opacity-70 hover:opacity-100 transition">
              <Shuffle size={20} />
            </button>

            <button
              onClick={handlePrevious}
              className="opacity-80 hover:scale-110 transition"
            >
              <IoPlaySkipBackSharp size={28} />
            </button>

            <button
              onClick={handlePlay}
              className="hover:scale-110 transition cursor-pointer"
            >
              {isPlaying ? (
                <FaPauseCircle size={56} />
              ) : (
                <FaPlayCircle size={56} />
              )}
            </button>

            <button
              onClick={handleNext}
              className="opacity-80 hover:scale-110 transition"
            >
              <IoPlaySkipForward size={28} />
            </button>

            <button className="opacity-70 hover:opacity-100 transition">
              <TiArrowLoop size={22} />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Mainplayer;
