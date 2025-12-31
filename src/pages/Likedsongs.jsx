import React from "react";
import { useSelector } from "react-redux";
import SongList from "../components/cards/SongList";
import { Heart } from "lucide-react";


const LikedSongs = () => {
  const { liked } = useSelector((state) => state.liked);
 

  return (
    <main id="likedscroll" className="flex-1 min-h-0 overflow-y-auto">
      <div className="h-screen bg-linear-to-b from-red-900  to-black ">
        <div className="h-[40%]   flex items-center gap-4 p-4">
          <div className="h-[89%] w-[30%] rounded-2xl overflow-hidden ">
            <div className="h-full w-full flex justify-center items-center bg-linear-to-t from-purple-800 mask-t-from-fuchsia-900">
            <Heart size={145} />
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <p>Public Playlist</p>
            <h1 className="text-7xl font-bold" >Liked Songs</h1>
            <div className="mt-6">
              <p className="font-medium">Spotify .<span className="text-white/50 font-medium" >80 Saves</span> <span className="text-white/50 font-medium" >.5123 songs,over 24hr</span></p>
            </div>
          </div>
        </div>

        <div className="bg-black/20">

    {liked.map((elem)=><SongList key={elem.id} elem={elem} />)}
     
       

        </div>
      </div>
    </main>
  );
};

export default LikedSongs;
