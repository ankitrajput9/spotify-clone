import React from 'react';
import { House } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='h-[8%] bg-black text-white px-5 flex items-center justify-between  ' >
      <div className='flex gap-6 justify-center items-center' >
        <img className='h-7' src="/Spotify.png" alt="" />
        <House/>
        <input className='w-80 py-2 px-3 rounded-full font-medium bg-gray-500/30' type="text" placeholder='Search' />
      </div>
      <div>
        Login
      </div>
    </div>
  );
}

export default Navbar;
