import React from 'react'
import './find.css'

function Card({image, make}) {
  return (
    <div className='card'>
      <img src= { image } alt="" />
      <p>{make}</p>
      
    </div>
  )
}

export default Card
