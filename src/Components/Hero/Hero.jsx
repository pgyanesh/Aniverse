import React from 'react'
import './Hero.css'
// import hero from '../../Assets/hero.png'
import onepiecewanohero from '../../Assets/onepiecewanohero.jpg'
import jjkhero from '../../Assets/jjkhero.jpg'
import demonslayerhero from '../../Assets/demonslayerhero.jpg'
import spyxfamilyhero from '../../Assets/spyxfamilyhero.jpg'
import drstonehero from '../../Assets/drstonehero.jpg'
import Slider from '../Slider/Slider'
const Hero = () => {
  const IMAGES=[drstonehero, onepiecewanohero , jjkhero , spyxfamilyhero , demonslayerhero]
   
  
 
  return (
    <div className='hero-container'>
      <Slider  imageURLs={IMAGES}/>
    </div>
  )
}

export default Hero
