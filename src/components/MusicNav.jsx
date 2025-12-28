import React from 'react';

const MusicNav = () => {
  return (
    <div className='h-[10%] bg-gray-400/10 flex gap-3 px-4 backdrop-blur-sm  items-center sticky top-0 z-2 ' >
    <button className='bg-gray-400/20 w-17  rounded-full p-2 text-center' >All</button>
    <button className='bg-gray-400/20 w-17 rounded-full p-2 text-center' >Music</button>
    <button className='bg-gray-400/20 w-17 rounded-full p-2 text-center' >podcast</button>
    </div>
  );
}

export default MusicNav;
