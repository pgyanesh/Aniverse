import React from 'react'
import './Movies.css'
import allMovies from '../../Assets/allMovies'
import MovieItem from '../../Components/MovieItem/MovieItem'
import Navbar from '../../Components/Navbar/Navbar'
const Movies = () => {
  return (
    <>
    <Navbar/>
    <div className='movies-container'>
      <div className="movies-innerContainer">
      <div className="movies-head">
        <h3>Movies</h3>
      </div>
      <div className="movies-content">
        {allMovies.map((item)=>{
          return <MovieItem key={item.id} title={item.title?item.title.slice(0,25): ' '} image={item.image} description={item.description?item.description.slice(0,100):" "} rating={item.rating} link1={item.link1}/>
        })}
      </div>
      </div>
    </div>
    </>
  )
}

export default Movies
