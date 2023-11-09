import React from 'react'
import allShows from '../../Assets/allShows'
import Item from '../Item/Item'
import './Trending.css'

const Trending = () => {
  return (
    <div className='trending-container'>
      <div className="trending-heading">
        <h2>Trending</h2>
      </div>
      <div className="trending-content">
          {allShows.map((item)=>{
              return <Item key={item.id} title={item.title} image={item.image} rating={item.rating} description={item.description} link1={item.link1} link2={item.link2}/>
          })}
      </div>
    </div>
  )
}

export default Trending
