import React from "react";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";

function MovieCard({ movieObject }) {

  let {watchlist , handleAddtoWatchList} = useContext(MovieContext)

  function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObject.id) {
        return true; // chnage button to cross
      }
    }
    return false; // added to my WatchList
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      {doesContain(movieObject) ? (
        <div className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
          &#10060;
          {/* // code for cross */}
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList (movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObject.title}
      </div>
    </div>
  );
}

export default MovieCard;
