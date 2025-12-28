import React from 'react';
import { useSelector } from 'react-redux';

const ArtistCard = () => {
   let {currentSong}= useSelector((state)=>state.music)
  return (
    <div className='h-[40%] w-[90%] absolute -bottom-35 ' >
        <div className='relative '>
        <img className='h-full w-full object-cover rounded-lg ' src={currentSong?.artistImg} alt="" />
        <h1 className='absolute top-0 p-3 text-xl font-medium'>{currentSong?.artist}</h1>
        </div>

    </div>
  );
}

export default ArtistCard;
