import React from 'react'
import './MovieItem.css'
const MovieItem = (props) => {
  return (
    <div className='movieItem-container'>
       <div className='movieItem-container'>
      <div className="movieItem-content">
        <img className='movieItem-img' src={props.image} alt='error'/>
        <a href={props.link1} target="_blank" rel="noreferrer" className='movieItem-title'>{props.title}</a>
        <p className='movieItem-rating'>{props.rating}</p>
        <p className='movieItem-desc'>{props.description}...</p>
      </div>
    </div>
    </div>
  )
}

export default MovieItem
