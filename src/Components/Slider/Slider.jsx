import React, { useState } from 'react'

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
    <div>
      <img src={props.imageURLs[imageIndex]} alt="error" />
      <button onClick={handlePrevButton}>left</button>
      <button onClick={handleNextButton}>right</button>
    </div>
  )
}

export default Slider
