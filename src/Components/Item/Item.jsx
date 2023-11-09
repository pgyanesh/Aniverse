import React from 'react'
import './Item.css'
// import aniwatchlogo from '../../Assets/aniwatchlogo.png'
// import crunchyroll from '../../Assets/crunchyroll.png'
const Item = (props) => {
  return (
    <div className='item-container'>
        <div className="item-image">
            <img src={props.image} alt='error'/>
        </div>
        <div className="item-content">          
            <h4>{props.title}</h4>
            <p className='item-para'>{props.rating}</p>
            {/* <p className='item-desc'>{props.description}</p> */}
            <div className="item-links">
              <a className='item-link' href={props.link1} target="_blank" rel="noreferrer" ><button>Watch now</button></a>
              
            </div>
        </div>
      
    </div>
  )
}

export default Item
