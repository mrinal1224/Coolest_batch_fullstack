import { useState } from "react";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [watchlist , setWatchlist] = useState([])


  const handleAddtoWatchList = (movieObj)=>{
     let updatedWatchlist = [...watchlist , movieObj]
     setWatchlist(updatedWatchlist)
     console.log(updatedWatchlist)
  }


  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddtoWatchList={handleAddtoWatchList}  />
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
