import { SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import React, { useState } from 'react';
import './Slider.css'
const Slider = (props) => {
    const[imageIndex, setImageIndex] = useState(0)
    const handlePrevButton=()=>{
        const firstImg = imageIndex===0;
        const newIndex = firstImg?props.imageURLs.length-1:imageIndex-1
        setImageIndex(newIndex)
    }
    const handleNextButton=()=>{
        const lastImg = imageIndex===props.imageURLs.length-1;
        const newIndex = lastImg?0:imageIndex+1
        setImageIndex(newIndex)
    }
        

  return (
    <div className='sliderImg-space'>
      <img src={props.imageURLs[imageIndex]} alt="error" />
      <div className="button-space">
      <button className='sliding-btn' onClick={handleNextButton}><SkipForwardIcon/></button>
      <button className='sliding-btn' onClick={handlePrevButton}><SkipBackIcon/></button>
     
      </div>
    </div>
  )
}

export default Slider
