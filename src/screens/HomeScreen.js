import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import { Rows } from '../Rows'
import requests from '../Requests'

const HomeScreen = () => {
    
    

  return (
    <div className='homeScreen'>

            <Nav />
            <Banner />  
            <Rows title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
            {/* <Rows title='Top Rated' fetchUrl={requests.fetchTopRated} /> */}
            <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Rows title='War Movies ' fetchUrl={requests.fetchWarMovies} />
            <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Rows title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Rows title='Documantaries ' fetchUrl={requests.fetchDocumentaries} />
       
          
     
        

            
            
    </div>
  )
}

export default HomeScreen