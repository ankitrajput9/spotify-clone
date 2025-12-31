import React from "react";
import MusicNav from "../components/MusicNav";
import Songcard from "../components/cards/Songcard";
import { useSelector } from "react-redux";

const Mainpage = () => {
  const { songs } = useSelector((state) => state.data);

  const user = JSON.parse(localStorage.getItem("loguser"))

  return (
   <main
  id="scroll"
  className="
    flex-1
    min-h-0
    bg-black/10
    overflow-y-auto
  "
>

      {/* TOP NAV */}
      <MusicNav />

      {/* CONTENT */}
      <div className="p-4  bg-black/10 sm:p-6 lg:p-8">
        <p className="text-xs text-gray-400/70 mb-1">Made for</p>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
           {user.username}
          </h1>
          <p className="text-sm font-medium text-gray-400/70 cursor-pointer hover:text-white">
            Show All
          </p>
        </div>

        {/* SONG GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-4
            gap-4
          "
        >
          {songs.map((elem) => (
            <Songcard key={elem.id} elem={elem} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Mainpage;
