import React from 'react'
import './Nav.css'
import logo from '../../images/logo.png'
const Nav = () => {
  return (
        <div className='Nav'>
      <div className='nav_logo'>
      <img src={logo} alt="" />
        <ul className='nav_list'>
          <li>Our Plans</li>
          <li>How It Works</li>
          <li>Our Menus  <a href="#"><i class="bi bi-chevron-down"></i></a></li>
          <li>Gift Cards</li>
          <li>Sustainability <a href="#"><i class="bi bi-chevron-down"></i></a></li>
          <li>Thanksgiving Box</li>
        </ul>
      </div>
        <div>
          <a href="#"><button className='nav_btn'>Log in</button></a>
        </div>
      </div>

  )
}

export default Nav