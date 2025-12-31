import Navbar from "../components/Navbar";
import Mainpage from "../pages/Mainpage";
import LeftSection from "../components/sections/LeftSection";
import RightSection from "../components/sections/RightSection";
import Player from "../components/sections/Player";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-black">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN BODY */}
      <div className="flex flex-1  gap-2 overflow-hidden text-white">

        {/* LEFT SIDEBAR */}
        <div className="hidden md:block md:w-[28%] lg:w-[22%]">
          <LeftSection />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full min-h-0 ">
           <Outlet/>
          {/* <Mainpage /> */}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:block lg:w-[22%]">
          <RightSection />
        </div>

      </div>

      {/* PLAYER (ALWAYS VISIBLE) */}
      <div className="h-22.5">
        <Player />
      </div>

    </div>
  );
};

export default HomeLayout;
