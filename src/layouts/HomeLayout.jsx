import React, { useRef } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { TiArrowLoop } from "react-icons/ti";
import { Split } from 'lucide-react';
import MusicNav from '../components/MusicNav';
import { IoMdAdd } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";




import Songcard from '../components/cards/Songcard';
import SongList from '../components/cards/SongList';
import { useSelector } from 'react-redux';
import Mainpage from '../pages/Mainpage';
import LeftSection from '../components/sections/LeftSection';
import RightSection from '../components/sections/RightSection';
import Player from '../components/sections/Player';





const HomeLayout = () => {



  return (

    <div className='h-screen ' >
                       <Navbar />
      <div className='flex h-[80%]  justify-between  text-white  '>
        {/* LEFT COMPONENT  */}
        <LeftSection />
        {/* CENTRE COMPONENT  */}
        <Mainpage />
        {/* RIGHT COMPONENTS  */}
        <RightSection />
      </div>
      {/* pLAYER COMPONENT  */}
                        <Player />
    </div>
  );
}

export default HomeLayout;
