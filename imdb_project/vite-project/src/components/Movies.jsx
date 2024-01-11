import React, { useEffect , useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
   const [movies , setMovies] = useState([])
   const [pageNo , setPageNo] = useState(1)

    
  //  console.log('this is the movies array' , movies)

  const handleNext=()=>{
     setPageNo(pageNo+1)
  }

  const handlePrevious=()=>{
    if(pageNo===1){
      setPageNo(pageNo)
    }
    setPageNo(pageNo-1)
 }

  useEffect(() => {

    console.log('use effect fetched data')
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        console.log(res.data.results)
        setMovies(res.data.results)
      });
  }, [pageNo]);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>

      <div className="flex justify-evenly flex-wrap gap-8 ">
        {movies.map((movieObj)=>{
          return <MovieCard name={movieObj.title} posterPath={movieObj.poster_path} />
        })}
      </div>

      <Pagination nextPageFn={handleNext} previosuPageFn={handlePrevious} pageNumber={pageNo} />
    </div>
  );
}

export default Movies;
