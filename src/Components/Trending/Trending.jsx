import React from 'react'
import './Trending.css'
import onepiece from '../../Assets/onepiece.jpg'
import jjk from '../../Assets/jjk.png'
import demonslayer from '../../Assets/demonslayer.png'
import spyxfamily from '../../Assets/spyxfamily.jpg'
import tokyorevengers from '../../Assets/tokyorevengers.jpg'


const Trending = () => {
  return (
    <div className='trending-container'>` 
      <div className="trending-title">
        <h2>Trending</h2>
      </div>
      <div className="trending-content">
        <div className="trending-content1">
            <div className="content-info">
                <h3 >1</h3>
                <h3 className='content-head'>One piece</h3>
           
            </div>
            <div className="content1-img">
              <img src={onepiece} alt="" />
            </div>
        </div>
        <div className="trending-content2">
            <div className="content-info">
                <h3>2</h3>
           
                <h3>Jujutsu kasien</h3>
            </div>
            <div className="content2-img">
              <img src={jjk} alt="" />
            </div>
        </div>
        <div className="trending-content3">
            <div className="content-info">
                <h3>3.</h3>
            
                <h3>Demon slayer</h3>
            </div>
            <div className="content3-img">
              <img src={demonslayer} alt="" />
            </div>
        </div>
        <div className="trending-content4">
            <div className="content-info">
              <h3>3.</h3>
            
                <h3>Tokyo Revengers</h3>
            </div>
            <div className="content4-img">
              <img src={tokyorevengers} alt="" />
            </div>
        </div>
        <div className="trending-content5">
            <div className="content-info">
              <h3>5.</h3>
           
              <h3>SpyxFamily</h3>
            </div>
            <div className="content5-img">
              <img src={spyxfamily} alt="" />
            </div>
        </div>
        <div className="trending-content6">
            <div className="content6-number">

            </div>
            <div className="content6-title">

            </div>
            <div className="content6-img"></div>
        </div>
        <div className="trending-content7">
            <div className="content7-number">

            </div>
            <div className="content7-title">

            </div>
            <div className="content7-img"></div>
        </div>
        
      </div>
    </div>
  )
}

export default Trending