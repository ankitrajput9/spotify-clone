  import React from "react";
  import { useSelector } from "react-redux";
  import Songcard from "../components/cards/Songcard";

  const LikedSongs = () => {
    const { songs } = useSelector((state) => state.data);

    const likedSongs = songs.filter((song) => song.liked);

    return (
      <main className="flex-1 min-h-0 overflow-y-auto bg-black/90">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-6">
            ❤️ Liked Songs
          </h1>

          {likedSongs.length === 0 ? (
            <p className="text-gray-400">No liked songs yet</p>
          ) : (
            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
                gap-4
              "
            >
              {likedSongs.map((elem) => (
                <Songcard key={elem.id} elem={elem} />
              ))}
            </div>
          )}
        </div>
      </main>
    );
  };

  export default LikedSongs;
