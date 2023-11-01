import React from 'react'
import './Navbar.css'
import aniverse from '../../Assets/aniverse.png'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar-left">
        <img src={aniverse} alt="navbar" />
        <input type='text' placeholder='Search'/>
      </div>
      <div className="navbar-middle">
        <p>Trending</p>
        <p>Movies</p>
        <p>Tv Series</p>
      </div>
      <div className="navbar-right">
        <a href='/'>Github</a>
        <a href='/'>Twitter</a>
        <a href='/'>Instagram</a>
        <a href='/'>Linkedin</a>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
