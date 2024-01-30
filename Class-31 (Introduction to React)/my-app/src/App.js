
import {useState} from 'react'

function App() {

  const [movies , setMovies] = useState([])
 
  const getMovies = ()=>{
    import('./data').then((module)=>{
      console.log(module.moviesData)
      setMovies(module.moviesData)
    })
     
  }


  return (
    <div>

      <button onClick={getMovies}>Show Movies</button>

      <p>{movies.length > 0 ? JSON.stringify(movies) : ' '}</p>

    </div>
  );
}
//JSX

export default App;
