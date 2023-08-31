import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineSearch ,AiOutlineUser,AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../Assets/images/logo.png';


function NavBar() {
    const [nav,setNav] = useState(false)
  return (
    <>
      <header className='navBar'>
        <img src={logo} alt="" />
        <nav>
            <ul className={nav ?['menu','active'].join(" "): 'menu'}>
                <li><a href="">Learn More</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Sign Up</a></li>
                <li><AiOutlineSearch size={25} style={{marginTop:'6px'}}/></li>
                <li><AiOutlineUser size={25} style={{marginTop:'6px'}}/></li>
            </ul>
        </nav>
        <div onClick={()=> setNav(!nav)} className='mobile-btn'>
            {nav ? <AiOutlineClose size={30}/> :<AiOutlineMenu size={30}/>  }
            
            
        </div>

      </header>
    </>
  )
}

export default NavBar
