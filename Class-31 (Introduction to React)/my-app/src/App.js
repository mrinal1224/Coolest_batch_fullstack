import { useState , lazy , Suspense } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(()=> import('./pages/Home') )
const About = lazy(()=> import('./pages/About') )
const Testimonials = lazy(()=> import('./pages/Testimonials') )
const Products = lazy(()=> import('./pages/Products'))


function App() {
  // const [movies , setMovies] = useState([])

  // const getMovies = ()=>{
  //   import('./data').then((module)=>{
  //     console.log(module.moviesData)
  //     setMovies(module.moviesData)
  //   })

  // } Dynamic Import

  return (
    <div>
      {/* <button onClick={getMovies}>Show Movies</button>

      <p>{movies.length > 0 ? JSON.stringify(movies) : ' '}</p> */}
     <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}
//JSX

export default App;
