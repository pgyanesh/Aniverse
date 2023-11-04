import React from 'react'
import './Hero.css'
// import hero from '../../Assets/hero.png'
// import onepiecehero from '../../Assets/onepiecehero.jpg'
import jjkhero from '../../Assets/jjkhero.jpg'
// import demonslayerhero from '../../Assets/demonslayerhero.jpg'
// import spyxfamilyhero from '../../Assets/spyxfamilyhero.jpg'
const Hero = () => {
  // const images=[
  //   {onepiecehero},{jjkhero},{spyxfamilyhero},{demonslayerhero}
  // ]
  // const currentImage = 0;
  // const lastImage = images.length-1;
 

  // const handleNextBtn=()=>{
  //     // currentImage++;
    
     
  // }
  return (
    <div className='hero-container'>
      <img id='image' src={jjkhero} alt="" />
      {/* <div className="hero-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div> */}
    </div>
  )
}

export default Hero
