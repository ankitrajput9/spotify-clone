import { Split } from 'lucide-react';
import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { IoPlaySkipBackSharp, IoPlaySkipForward } from 'react-icons/io5';
import { TiArrowLoop } from 'react-icons/ti';
import { Shuffle } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayorPause, setcurrentSong } from '../features/songSlice';
import { useLocation } from 'react-router';



const Mainplayer = () => {
  const { currentSong,isPlaying } = useSelector(state => state.music)
  const {songs}= useSelector(state=>state.data)
  const dispatch = useDispatch()


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
    const handleplay=()=>{
      dispatch(PlayorPause())
      dispatch(setcurrentSong(currentSong))
    }



  return (
    <div className='overflow-y-auto w-full ' >
      <div className='relative w-full h-[99%] flex justify-center items-center  ' >
        <img className='w-full h-full blur-xs ' src={currentSong?.img} alt="" />
        <div className='h-[10%] w-full absolute bottom-5 flex justify-center  gap-5 '>


          <button onClick={()=>{}} className='cursor-pointer' ><Shuffle size={18} /></button>
          <button onClick={handlePrevious} className='cursor-pointer' ><IoPlaySkipBackSharp size={26} /></button>
          <button onClick={handleplay} className='cursor-pointer' >
            {isPlaying?<FaPauseCircle size={48} />:<FaPlayCircle size={48} /> }
            
            </button>
          <button onClick={handleNext} className='cursor-pointer' ><IoPlaySkipForward size={26} /></button>
          <button onClick={()=>{}} className='cursor-pointer' ><TiArrowLoop size={18} /></button>


        </div>
      </div>
    </div>
  );
}

export default Mainplayer;
