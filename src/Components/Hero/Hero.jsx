import React from 'react'
import './hero.css'
import { AiOutlineSearch } from 'react-icons/ai'

function Hero() {
  return (
    <div className='hero'>

      <form >
        <div className="text">
            <label >Where</label>
            <input className='input_text' type="text" placeholder='Search-Locations' />
        </div>
        <div className="from">
            <span className="border"></span>
            <label >From</label>
            <input type="date" />

        </div>
        <div className="until">
            <span className="border"></span>
            <label >Until</label>
            <input type="date" />
        </div>
        <div className="search-btn">
            <AiOutlineSearch className='icon' size={35}/>
            <button className='btn'>Seach for Car</button>

        </div>
      </form>
    </div>
  )
}

export default Hero
