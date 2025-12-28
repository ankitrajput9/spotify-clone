import React, { useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import SongList from "../cards/SongList";
import { useSelector } from "react-redux";
import { CiCircleList } from "react-icons/ci";
import { useNavigate } from "react-router";

const LeftSection = () => {
  const  navigate =useNavigate()
  const { songs } = useSelector((state) => state.data);
  const [likedsong, setLikedsong] = useState(false);

  const displayedSong = likedsong
    ? songs.filter((song) => song.liked)
    : songs;


const likedclick=()=>{
    setLikedsong(true)
    navigate("/home/liked")

}
const recentclick=()=>{
setLikedsong(false)
navigate("/home")
}


  return (
    <aside
      id="leftscroll"
      className="
        hidden sm:flex
        flex-col
        bg-black/10 text-white
        w-64 md:w-72 lg:w-80
        h-full
        border-r border-black
        overflow-y-auto
      "
    >
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-3 sticky top-0 bg-black/90 backdrop-blur z-10">
        <h1 className="font-medium text-sm sm:text-base">Your Library</h1>
        <div className="flex gap-3 items-center">
          <button className="hover:text-green-500">
            <IoMdAdd size={22} />
          </button>
          <button className="hover:text-green-500">
            <AiOutlineFullscreen size={22} />
          </button>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex gap-2 px-4 py-3 sticky top-13 bg-black/90 backdrop-blur z-10 border-b border-black">
        <button
          onClick={recentclick}
          className={`px-4 py-1 rounded-full text-sm transition cursor-pointer
            ${
              !likedsong
                ? "bg-white text-black"
                : "bg-gray-400/20 text-white"
            }`}
        >
          Recent
        </button>

        <button
          onClick={likedclick}
          className={`px-4 py-1 rounded-full text-sm transition cursor-pointer
            ${
              likedsong
                ? "bg-white text-black"
                : "bg-gray-400/20 text-white"
            }`}
        >
          Liked
        </button>
      </div>

      {/* SEARCH + SORT */}
      <div className="flex justify-between items-center px-4 py-3 text-gray-300">
        <button className="hover:text-white">
          <IoSearch size={18} />
        </button>

        <button className="flex items-center gap-2 text-sm hover:text-white">
          <span>Recent</span>
          <CiCircleList size={18} />
        </button>
      </div>

      {/* SONG LIST */}
      <div className="flex flex-col gap-2 px-2 pb-4">
        {displayedSong.length > 0 ? (
          displayedSong.map((elem) => (
            <SongList key={elem.id} elem={elem} />
          ))
        ) : (
          <p className="text-sm text-gray-400 text-center mt-6">
            No liked songs
          </p>
        )}
      </div>
    </aside>
  );
};

export default LeftSection;
