// import { Split } from "lucide-react";
// import React, { useRef, useState, useEffect } from "react";
// import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
// import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
// import { TiArrowLoop } from "react-icons/ti";
// import { useDispatch, useSelector } from "react-redux";
// import { PlayorPause, setcurrentSong } from "../../features/songSlice";
// import { setIsExpanded } from "../../features/playerSlice";

// const Miniplayer = () => {
//   const [seek, setSeek] = useState(0);
//   const [current, setCurrent] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const startY = useRef(0);
//   const audioref = useRef(null);
//   const dispatch = useDispatch();

//   const { isExpanded } = useSelector((state) => state.player);
//   const { songs } = useSelector((state) => state.data);
//   const { currentSong, isPlaying } = useSelector((state) => state.music);

//   /* AUDIO PLAY / PAUSE */
//   useEffect(() => {
//     if (!audioref.current) return;
//     isPlaying ? audioref.current.play() : audioref.current.pause();
//   }, [isPlaying, currentSong]);

//   const formatTime = (time) => {
//     if (!time) return "00:00";
//     const m = Math.floor(time / 60);
//     const s = Math.floor(time % 60);
//     return `${m}:${s < 10 ? "0" : ""}${s}`;
//   };

//   /* SWIPE HANDLERS */
//   const handleTouchStart = (e) => {
//     startY.current = e.touches[0].clientY;
//   };

//   const handleTouchEnd = (e) => {
//     const endY = e.changedTouches[0].clientY;
//     const diff = startY.current - endY;

//     if (diff > 70) dispatch(setIsExpanded(true));
//     if (diff < -70) dispatch(setIsExpanded(false));
//   };

//   /* NEXT / PREVIOUS */
//   const handleNext = () => {
//     let next = songs.find((v) => v.id === currentSong?.id + 1);
//     if (!next) next = songs[0];
//     dispatch(setcurrentSong(next));
//   };

//   const handlePrevious = () => {
//     let prev = songs.find((v) => v.id === currentSong?.id - 1);
//     if (!prev) prev = songs[songs.length - 1];
//     dispatch(setcurrentSong(prev));
//   };

//   return (
//     <>
//       {/* TRANSPARENT MINI / FULL PLAYER */}
//       <div
//         className={`
//           fixed inset-0 z-[60]
//           flex flex-col justify-end
//           pointer-events-none
//           transition-transform duration-300
//           ${isExpanded ? "translate-y-0" : "translate-y-1/3"}
//         `}
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//       >
//         {/* CONTROLLER PANEL */}
//         <div className="
//           pointer-events-auto
//           backdrop-blur-md
//           bg-black/30
//           px-4 py-4
//           rounded-t-2xl
//           mx-auto
//           w-full max-w-xl
//         ">
//           {/* SONG INFO */}
//           <div className="text-center mb-3">
//             <p className="font-medium truncate">{currentSong?.title}</p>
//             <p className="text-xs text-gray-300 truncate">
//               {currentSong?.artist}
//             </p>
//           </div>

//           {/* SEEK BAR */}
//           <div className="flex items-center gap-2 mb-3">
//             <span className="text-xs">{formatTime(current)}</span>
//             <input
//               type="range"
//               min="0"
//               max={duration || 0}
//               value={seek}
//               onChange={(e) => {
//                 const val = Number(e.target.value);
//                 audioref.current.currentTime = val;
//                 setSeek(val);
//               }}
//               className="w-full accent-purple-500"
//             />
//             <span className="text-xs">{formatTime(duration)}</span>
//           </div>

//           {/* CONTROLS (ALWAYS VISIBLE) */}
//           <div className="flex justify-center items-center gap-6">
//             <button>
//               <Split size={20} />
//             </button>

//             <button onClick={handlePrevious}>
//               <IoPlaySkipBackSharp size={24} />
//             </button>

//             <button onClick={() => dispatch(PlayorPause())}>
//               {isPlaying ? (
//                 <FaPauseCircle size={44} />
//               ) : (
//                 <FaPlayCircle size={44} />
//               )}
//             </button>

//             <button onClick={handleNext}>
//               <IoPlaySkipForward size={24} />
//             </button>

//             <button>
//               <TiArrowLoop size={22} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* AUDIO */}
//       <audio
//         ref={audioref}
//         src={currentSong?.songUrl}
//         onTimeUpdate={(e) => {
//           setCurrent(e.target.currentTime);
//           setSeek(e.target.currentTime);
//         }}
//         onLoadedMetadata={(e) => setDuration(e.target.duration)}
//       />
//     </>
//   );
// };

// export default Miniplayer;
