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
    overflow-y-auto
    rounded-lg

    /* Base */
    bg-[#0b0f0c]
    relative

    /* Left glow */
    before:absolute before:inset-0
    before:bg-[radial-gradient(circle_at_left,rgba(34,197,94,0.12),transparent_45%)]
    before:pointer-events-none

    /* Right glow */
    after:absolute after:inset-0
    after:bg-[radial-gradient(circle_at_right,rgba(34,197,94,0.12),transparent_45%)]
    after:pointer-events-none
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
