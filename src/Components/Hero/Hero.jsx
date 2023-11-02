import React from 'react'
import './Hero.css'
import hero from '../../Assets/hero.png'
const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={hero} alt="" />
    </div>
  )
}

export default Hero
