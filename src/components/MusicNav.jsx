import React from "react";
import { useNavigate } from "react-router";

const MusicNav = () => {
  const navigate= useNavigate()
  return (
    <div
      className="
        sticky top-0 z-20
        flex items-center gap-2
        px-4 py-3
        bg-black/40 backdrop-blur-md
        overflow-x-auto
        scrollbar-hide
      "
      >
           <button  onClick={()=>navigate("/home")} className="cursor-pointer">
         <NavButton label="Home" />
        </button>  
      <button onClick={()=>navigate("/home/liked")} className="cursor-pointer">
      <NavButton  label="Liked" />
        </button>    
           <button className="cursor-pointer">
      <NavButton label="Podcast" />
        </button>   
    </div>
  );
};

const NavButton = ({ label }) => (
  <button
    className="
      shrink-0
      px-4 py-1.5
      rounded-full
      text-sm font-medium
      bg-gray-500/20
      hover:bg-gray-500/30
      transition
      whitespace-nowrap
    "
  >
    {label}
  </button>
);

export default MusicNav;
