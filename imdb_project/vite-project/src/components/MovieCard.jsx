import React from "react";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movieObject }) {

  let {watchlist , handleAddtoWatchList ,DeleteFromWatchList } = useContext(MovieContext)

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
        <div onClick={()=>DeleteFromWatchList(movieObject)} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
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

      <Link to={`/details/${movieObject.id}`} ><i class="fa-solid fa-circle-info text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"></i></Link>
     
    </div>
     
  );
}

export default MovieCard;
