import React from 'react'
import './Movies.css'
import allMovies from '../../Assets/allMovies'
import MovieItem from '../../Components/MovieItem/MovieItem'
import Navbar from '../../Components/Navbar/Navbar'
const Movies = () => {
  return (
    <div>
        <Navbar/>
      {allMovies.map((item)=>{
        return <MovieItem key={item.id} title={item.title} description={item.description?item.description.slice(0,48):""} rating={item.rating} image={item.image} link1={item.link1}/>
      })}
    </div>
  )
}

export default Movies
