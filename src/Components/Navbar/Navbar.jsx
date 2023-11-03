import React from 'react'
import './Navbar.css'
import aniverse from '../../Assets/aniverse.png'
import aniwatchlogo from '../../Assets/aniwatchlogo.png'
import crunchyroll from '../../Assets/crunchyroll.png'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar-left">
        <img src={aniverse} alt="navbar" />
        <input className='navbar-search' type='text' placeholder='Search anime...'/>
      </div>
      <div className="navbar-middle">
        <a className='navbarMiddle-links' href='/'>Movies</a>
        <a className='navbarMiddle-links' href='/'>Tv Series</a>
        <a className='navbarMiddle-links' href='/'>Manga</a>
      </div>
      <div className="navbar-right">
        <a className='logo1' href='https://aniwatch.to/home' target="_blank" rel="noreferrer"><img src={aniwatchlogo} alt="" /></a>
        <a className='logo2' href='https://www.crunchyroll.com/' target="_blank" rel="noreferrer"><img src={crunchyroll} alt="" /></a>
        
       </div>
       <div className="navbar-loginbtn">
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
