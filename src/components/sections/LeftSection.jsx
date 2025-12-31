import React, { useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import SongList from "../cards/SongList";
import { useSelector } from "react-redux";
import { CiCircleList } from "react-icons/ci";
import { useNavigate } from "react-router";
import { Heart } from "lucide-react";

const LeftSection = () => {
  const  navigate =useNavigate()
 const {liked}=useSelector((state)=>state.liked)


const likedclick=()=>{
    navigate("/home/liked")

}
const recentclick=()=>{
navigate("/home")
}


  return (
   <aside
  id="leftscroll"
  className="
  rounded-lg
    hidden sm:flex
    flex-col
    text-white
    w-62 md:w-72 lg:w-70
    h-full
    border-r border-black
    overflow-y-auto

    /* Background effect */
    bg-[#0b0f0c]
    relative
    before:absolute before:inset-0
    before:bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_45%)]
    before:pointer-events-none
  "
>

      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-3 sticky top-0 backdrop-blur z-10">
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

<div className="flex flex-col items-center gap-3 p-2">
  <button 
  onClick={likedclick} 
  className="cursor-pointer py-1 px-2 flex items-center gap-5  w-full rounded-md bg-linear-to-r from-pink-900 to-white/10 ">
 <div className="h-15 w-15 rounded-lg flex justify-center items-center bg-linear-to-t from-purple-800 mask-t-from-fuchsia-900">
            <Heart size={40} />
            </div>
  <p className="text-lg font-medium" >Liked</p>
  </button>
  <button 
  onClick={recentclick} 
  className="cursor-pointer py-1 flex items-center gap-5 px-2 w-full rounded-md bg-linear-to-r from-blue-900 to-white/10 ">
     <img className="h-15 rounded-lg " src="https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg" alt="" />
  <p className="text-lg font-medium" >Recent</p>
    </button>

  
</div>
   
    
    </aside>
  );
};

export default LeftSection;
