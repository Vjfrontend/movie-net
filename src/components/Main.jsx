import React from 'react'
import { useState } from 'react'
import requests from '../Request'
import { useEffect } from 'react'
import axios from 'axios'

function Main() {
const[movies,setMovies] = useState([])

const movie = movies[Math.floor(Math.random()*movies.length)]
useEffect(()=>{
axios.get(requests.requestPopular).then((response)=>{
  setMovies(response.data.results)
}

)
},[])
console.log(movie)
  return (
    <div className='w-full h-[450px] text-white'>
      <div className='w-full h-full border border-white '>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-gray'></div>
        <img className='w-full h-full object-cover object-top '  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movies?.title} />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl '>{movie?.title}</h1>
        <div>
        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>play</button>
        <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>watch later</button>
        </div>
         <p className='text-gray-500 text-sm'>Released:{movie?.release_date}</p>
         <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w[35%] text-gray-200'>{movie?.overview}</p>
      </div>
      </div>
    </div>
  )
}

export default Main
