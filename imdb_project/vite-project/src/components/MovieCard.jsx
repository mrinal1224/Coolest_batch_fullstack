import React from 'react'

function MovieCard({name , posterPath , movieObject , handleAddToWatchList }) {
  return (
    <div className='h-[40vh] w-[200px] bg-cover flex  rounded-lg hover:scale-110 duration-300 items-end' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${posterPath})`}}>
      
      
      
      
      
      <div onClick={()=>handleAddToWatchList(movieObject)} className='flex justify-center items-center'>&#128525;</div>


      <div className='text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg'>{name}</div>
    </div>

    
  )
}

export default MovieCard