import React , { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";



export default function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);
 

  // A snippet of code which runs based on specific conditions //
    useEffect(() => {
      async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          return request;
      }
      fetchData();
    },  [fetchUrl]);

    console.log(movies);
  
  return (
    <div className="row">
        {/* title */}
     
        <h2>{title} </h2>
        <div className="row__posters">
          {movies?.map((movie) => (
            <img 
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`} 
            alt={movie.title}
            /> 
          
          ))}   
        </div>
       

    </div>
  )
}
