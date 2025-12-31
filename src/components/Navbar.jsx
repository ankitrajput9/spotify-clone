import React from "react";
import { House, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { replace, useNavigate } from "react-router";
import { logout } from "../features/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  
  const dispatch = useDispatch()
  const navigate =useNavigate()

const handleLogout=()=>{
  toast.error("Loged Out")
  dispatch(logout())
navigate("/",{replace:true})

}

  return (
    <nav className="w-full bg-black text-white px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4 sm:gap-6 flex-1">
        
        {/* Logo */}
        <img
          className="h-6 sm:h-7 cursor-pointer"
          src="/Spotify.png"
          alt="Spotify"
        />

        {/* Home Icon */}
        <button onClick={()=> navigate("/home")} className=" cursor-pointer hidden sm:block p-2 rounded-full bg-gray-700/30 hover:bg-gray-700/50">
          <House size={20} />
        </button>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="
            hidden sm:block
            w-full max-w-75 lg:max-w-100
            py-2 px-4 rounded-full
            bg-gray-500/30
            placeholder-gray-300
            focus:outline-none
          "
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <button onClick={handleLogout} className=" cursor-pointer text-sm sm:text-base bg-green-500 px-4 py-2 rounded-full hover:text-green-500 hover:bg-white transition">
          Logout
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
