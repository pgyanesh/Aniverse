import React from 'react'
import './Hero.css'
// import hero from '../../Assets/hero.png'
import onepiecehero from '../../Assets/onepiecehero.jpg'
import jjkhero from '../../Assets/jjkhero.jpg'
import demonslayerhero from '../../Assets/demonslayerhero.jpg'
import spyxfamilyhero from '../../Assets/spyxfamilyhero.jpg'
import Slider from '../Slider/Slider'
const Hero = () => {
  const IMAGES=[onepiecehero, jjkhero , spyxfamilyhero , demonslayerhero]
   
  
 
  return (
    <div className='hero-container'>
      <Slider  imageURLs={IMAGES}/>
    </div>
  )
}

export default Hero
