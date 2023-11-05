import React from 'react'
import './Series.css'
import SeriesItem from '../../Components/SeriesItem/SeriesItem'
import series from '../../Assets/series'
import './Series.css'
import Navbar from '../../Components/Navbar/Navbar'
const Series = () => {
  return (
    <>
    <Navbar/>
    <div className='series-container'>
      <div className="series-innerContainer">
      <div className="series-head">
        <h3>TV Series</h3>
      </div>
      <div className="series-content">
        {series.map((item)=>{
          return <SeriesItem key={item.id} title={item.title} image={item.image} description={item.description?item.description.slice(0,100):" "} rating={item.rating} link1={item.link1}/>
        })}
      </div>
      </div>
    </div>
    </>
  )
}

export default Series
