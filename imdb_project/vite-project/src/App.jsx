import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";

import { MovieContext } from "./components/MovieContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddtoWatchList = (movieObj) => {
    let updatedWatchlist = [...watchlist, movieObj];
    setWatchlist(updatedWatchlist);
    localStorage.setItem('movies' , JSON.stringify(updatedWatchlist))
    console.log(updatedWatchlist);
  };

  useEffect(()=>{
      let moviesFromLocalStorage = localStorage.getItem('movies')
      if(!moviesFromLocalStorage){
        return 
      }
      setWatchlist(JSON.parse(moviesFromLocalStorage))
  } , [])

  return (
    <>
      <BrowserRouter>

       <MovieContext.Provider value={{handleAddtoWatchList , watchlist , setWatchlist}}>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies/>
              </>
            }
          />

          <Route
            path="/watchlist"
            element={<WatchList />}
          />
        </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
