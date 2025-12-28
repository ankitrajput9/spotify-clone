import React from 'react';
import { useSelector } from 'react-redux';
import ArtistCard from '../cards/ArtistCard';

const RightSection = () => {
    const {currentSong}=useSelector((state)=>state.music)
    console.log(currentSong)
    return (
        <div id='rightscroll' className=' h-full  w-[22%] border-l-6 border-black bg-black/90 overflow-hidden overflow-y-auto'>
            <div className='h-[80%] w-full flex items-center flex-col relative  '>
                <img className='h-full w-full object-cover' src={currentSong?.img} alt="" />
                <ArtistCard/>
            </div>
        </div>

    );
}

export default RightSection;
