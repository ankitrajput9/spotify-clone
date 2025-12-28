import React from 'react';
import MusicNav from '../components/MusicNav';
import { useSelector } from 'react-redux';
import Songcard from '../components/cards/Songcard';

const Likedsongs = () => {
  let {songs}=useSelector((state)=>state.data)
  return (
    <div id='scroll' className='h-full rounded-lg w-[76%]  bg-black/90   overflow-y-auto'>
                <MusicNav />
                <div className='p-4'>
                  <p className='text-xs text-gray-400/70'>made for</p>
                  <div className='flex justify-between  '>
                    <h1 className='text-2xl font-bold'>Ankit Rajput</h1>
                    <p className='text-sm font-medium text-gray-400/70'>Show All</p>
                  </div >
                  <div className='flex gap-6 flex-wrap justify-center'>
                   {songs.map((elem)=><Songcard key={elem.id} elem={elem}/>)}
                   
                  </div>
      
                </div>
              </div>
  );
}

export default Likedsongs;
