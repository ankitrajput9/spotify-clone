import React, { useState } from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import SongList from '../cards/SongList';
import { useSelector } from 'react-redux';
import { CiCircleList } from 'react-icons/ci';

const LeftSection = () => {
    const { songs } = useSelector((state) => state.data)
    const [likedsong, setLikedsong] = useState(false)

    const displayedSong = likedsong ?songs.filter((song)=>song.liked):songs; 

    return (
        <div id='leftscroll' className='h-full  border-r-6 border-black  flex flex-col gap-4 w-[22%]  bg-black/90  overflow-y-auto '>

            <div className='flex justify-between h-5 items-center p-4 sticky top-0  backdrop-blur-2xl z-2 '>
                <h1 className='font-medium'> Your Library</h1>
                <div className='flex gap-3 items-center '>
                    <button><IoMdAdd size={25} /></button>
                    <button><AiOutlineFullscreen size={25} /></button>
                </div>
            </div>

            <div className='flex gap-3 sticky top-9 py-2 border-b border-black backdrop-blur-2xl z-2 '>
                <button onClick={
                   ()=> setLikedsong(false)
                } className='bg-gray-400/20 w-19 rounded-full py-1 cursor-pointer  text-center' >Recent</button>
                <button onClick={()=>setLikedsong(true)} className='bg-gray-400/20 w-19 rounded-full py-1 cursor-pointer  text-center' >Liked</button>
            </div>



            <div className='flex justify-between items-center'>
                <button><IoSearch size={20} /></button>
                <button className='flex justify-center items-center gap-2' ><p>Recent</p> <CiCircleList size={20} /> </button>
            </div>

            {/* mAIN  */}
            <div className='flex flex-col gap-2' >

                {displayedSong.length >0 ?displayedSong.map((elem) => <SongList key={elem.id} elem={elem} />): <p>No liked song</p> }
                {/* {songs.map((elem) => <SongList key={elem.id} elem={elem} />)} */}

            </div>

        </div>
    );
}

export default LeftSection;
