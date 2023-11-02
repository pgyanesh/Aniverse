import React from 'react'
import './FirstPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Trending from '../../Components/Trending/Trending'
const FirstPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Trending/>
    </div>
  )
}

export default FirstPage
