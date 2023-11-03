import React from 'react'
import './Navbar.css'
import aniverse from '../../Assets/aniverse.png'
import aniwatchlogo from '../../Assets/aniwatchlogo.png'
import crunchyroll from '../../Assets/crunchyroll.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar-left">
        <img src={aniverse} alt="navbar" />
        <input className='navbar-search' type='text' placeholder='Search anime...'/>
      </div>
      <div className="navbar-middle">
        <Link className='navbarMiddle-links' to='/'>Movies</Link>
        <Link className='navbarMiddle-links' to='/'>Tv Series</Link>
        <Link className='navbarMiddle-links' to='/'>Manga</Link>
      </div>
      <div className="navbar-right">
        <a className='logo1' href='https://aniwatch.to/home' target="_blank" rel="noreferrer"><img src={aniwatchlogo} alt="" /></a>
        <a className='logo2' href='https://www.crunchyroll.com/' target="_blank" rel="noreferrer"><img src={crunchyroll} alt="" /></a>
        
       </div>
       <div className="navbar-loginbtn">
        <Link to="/login"><button>Login</button></Link>
      </div>
    </div>
  )
}

export default Navbar
