import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        let ignore=false;
        async function fetchData() {

            let ignore=false;
            const request= await axios.get(requests.fetchNetflixOriginals); 
            if(!ignore){
                setMovie(   
                    request.data.results[Math.floor(Math.random()*request.data.results.length)]
                )
            }
            
        }
         fetchData()

         return () => {
            ignore = true;
          };
    }, [])




    

    function truncate(string, n) {
            return string?.length > n ? string.substr(0, n-1)+ '...' : string;
    }
  return (
    <header 
    className='banner' 
    style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize:"cover",
        backgroundPosition:'center',
      
    }}> 

    <div className="banner__contents">
        <h1 className="banner__title">{
            movie?.title || movie?.name ||  movie?.original_name
        }</h1>
        <div className="banner__btns">
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>

        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}
        </h1>
    </div>

    <div className="banner--fadebottom"></div>


                       
    </header>
  )
}

export default Banner