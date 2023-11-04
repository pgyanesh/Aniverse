import React from 'react'

const SeriesItem = (props) => {
  return (
    <div className='seriesItem-container'>
      <div className="seriesItem-content">
        <img src={props.image} alt='error'/>
        <h3>{props.title}</h3>
        <p>{props.rating}</p>
      </div>
    </div>
  )
}

export default SeriesItem
