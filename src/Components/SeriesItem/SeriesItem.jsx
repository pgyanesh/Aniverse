import React from 'react'
import './SeriesItem.css'
const SeriesItem = (props) => {
  return (
    <div className='seriesItem-container'>
      <div className="seriesItem-content">
        <img className='seriesItem-img' src={props.image} alt='error'/>
        <a href={props.link1} target="_blank" rel="noreferrer" className='seriesItem-title'>{props.title}</a>
        <p className='seriesItem-rating'>{props.rating}</p>
        <p className='seriesItem-desc'>{props.description}...</p>
      </div>
    </div>
  )
}

export default SeriesItem
