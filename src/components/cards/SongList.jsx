import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { PlayorPause, setcurrentSong } from '../../features/songSlice';


const SongList = ({ elem }) => {
const {currentSong,isPlaying}=useSelector((state)=>state.music)
const dispatch = useDispatch()

    return (
        <div id='songlist' className='h-18 flex items-center  gap-6 px-4 hover:bg-black/20 cursor-pointer transition'>
            <div onClick={()=>{currentSong?.id === elem.id?dispatch(PlayorPause()):dispatch(setcurrentSong(elem))}} className='h-13 w-13 rounded-full overflow-hidden relative ' >
                <img className='h-full w-full object-cover' src={elem.img} alt="" />
                <button className=' absolute top-2 left-2 cursor-pointer opacity-0 ' > <FaCirclePlay size={39} color='#60C95A' /></button>
            </div>
            <div>
                <h1 className='text-lg font-medium'>{elem.title}</h1>
                <p className='font-medium'>{elem.artist}</p>
            </div>
        </div>
    );
}

export default SongList;
