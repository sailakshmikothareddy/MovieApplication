import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCards from './MovieCards'

function Movielist() {

const [movieList,setMovieList]=useState();
console.log('movieList',movieList)
useEffect(()=>{
axios.get('http://localhost:8000/movies').then(res=>setMovieList(res.data))
},[])

  return (
    <div>
       
        <div className='container ' >
        <h1 className='text-center mt-4 text-primary'>Movies List </h1>
        <div className='row'>
           
    {movieList?.moviesList?.map((movie,index)=>(
         <div className='col-sm-4 mt-4'>
         <div className='card shadow-lg'>
             <div className='card-body text-center'>
            <MovieCards key = {index} name = {movie.name} rating = {movie.rating} release_Date = {movie.releaseDate} />
            </div>
            </div>
                </div>
            
        ))
    }
    </div>

        </div>
    </div>
  )
}


export default Movielist