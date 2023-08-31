import React from 'react'
import './footer.css'
import  logo  from '../../Assets/images/logo_dark.png'
function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <img src= {logo} alt="" />
            <button>Share a Car</button>
        </div>
    </div>
  )
}

export default Footer
