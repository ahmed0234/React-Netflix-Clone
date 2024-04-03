import React, { useEffect, useState } from 'react'
import './Rows.css'
import axios from './axios';

export const Rows = ({title,fetchUrl, isLargeRow }) => {

  

    const [movies, setmovies] = useState([]);

    const baseUrl='https://image.tmdb.org/t/p/original/'


    useEffect(() => {
      let ignore=false;
        async function fetchData() {
          try {
            const request = await axios.get(fetchUrl);
            if(!ignore){
              setmovies(request.data.results);

            }
 
          } catch (error) {
            // Handle errors
            // console.log('Error fetching data:', error);
          }

     
        }
    
        fetchData();

        return () => {
          ignore = true;
        };
     
      }, [fetchUrl]); // Only run the effect when fetchUrl changes
   

      
  return (
    <div className='row'>

        <h1>{title}</h1>
        <div className="row_posters">
            {movies.map((movie) => (
              <img 
              className={`row__poster ${isLargeRow && `row__posterLarge`}`}
              key={movie.id} 
              src={`${baseUrl}${
                isLargeRow? movie.poster_path : movie.backdrop_path
              }`} 
              alt={movie.name} />
            ))}
  </div>

    </div>
  )
}
