import { Split } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { FaHeart, FaPlayCircle, FaRegHeart } from 'react-icons/fa';
import { IoPlaySkipBackSharp, IoPlaySkipForward } from 'react-icons/io5';
import { TiArrowLoop } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { PlayorPause } from '../../features/songSlice';
import { FaPauseCircle } from "react-icons/fa";
import { FcLike } from 'react-icons/fc';
import { toggleLike } from '../../features/dataSlice';
import { FcLikePlaceholder } from "react-icons/fc";



const Player = () => {
  
    //   Handle States And Redux 

    const [seek, setSeek] = useState('')
    const [current, setCurrent] = useState(0)
    const [duration, setDuration] = useState(0)

    const {songs}= useSelector((state)=>state.data)
    const { currentSong, isPlaying } = useSelector((state) => state.music)
    const audioref = useRef()
    const dispatch = useDispatch()

    const clickHandle = () => {
        dispatch(PlayorPause())
    }

    // Handlle Audio 

    useEffect(() => {
        if (!audioref.current) return;

        if (currentSong && isPlaying) {
            audioref.current.play();
        } else {
            audioref.current.pause();
        }
    }, [currentSong, isPlaying]);

    //  Time Formate 

    const formatTime = (time) => {
        if (!time) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };




    return (
        <div className=' flex justify-between h-[12%] bg-black'>
            <div className='flex gap-5 w-[30%] items-center  p-3 ' >
                <div className='h-12 w-12'>
                    <img className='h-full w-full object-cover' src={currentSong?.img} alt="" />

                 {/* Player left card  */}

                </div>
                <div className='text-white' >
                    <h1>{currentSong?.title}</h1>
                    <p className=''>{currentSong?.artist}</p>
                </div>
                <div>
                    <butt 
                    onClick={()=>dispatch(toggleLike(currentSong.id))} 
                    className='cursor-pointer' >
                     {currentSong?.liked ? (
          <FaHeart className="text-green-500" /> 
        ) : (
          <FaRegHeart className="text-gray-400" />
        )}  
                        </butt>
                </div>
            </div>
            <div className='flex flex-col w-full text-white justify-center items-center h-full'>
                <div className='flex gap-4'>

                    {/* Previous Button */}

                    <button className='cursor-pointer text-gray-500/70 font-medium'><Split size={20} /></button>
                    <button className='cursor-pointer'><IoPlaySkipBackSharp size={25} /></button>

                    {/* Play And Pause Button  */}

                    <button onClick={clickHandle} className='cursor-pointer'>{currentSong && isPlaying ? <FaPauseCircle size={39} /> : <FaPlayCircle size={39} />
                    } </button>

                    {/* Next button  */}

                    <button className='cursor-pointer'><IoPlaySkipForward size={25} /> </button>
                    <button className='cursor-pointer text-gray-500/70 font-medium'><TiArrowLoop size={20} /></button>
                </div>

                <audio
                    ref={audioref}
                    src={currentSong?.songUrl}
                    onTimeUpdate={(e) => {
                        setCurrent(e.target.currentTime);
                        setSeek(e.target.currentTime);
                    }}
                    onLoadedMetadata={(e) => {
                        setDuration(e.target.duration);
                    }}
                />
 
                  {/* Seek Bar   */}

                <div className=' h-1 w-[40%] flex mt-2 justify-center items-center gap-2  '>
                    <p>{formatTime(current)}</p>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={seek}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            audioref.current.currentTime = value;
                            setSeek(value);
                        }}
                        className="w-full h-full cursor-pointer"
                    />

                    <p>{formatTime(duration)}</p>
                </div>

            </div>
            <div className='text-white w-[30%]'>

            </div>

        </div>
    );
}

export default Player;
