import React from 'react'
import './HomeHero.css'
import logo from '../../assets/images/ld-logo-white-column.png'
const HomeHero = () => {
  return (
    <div className='home-hero'>
      <div className='content'>
        <img src={logo} alt='Lind Designs' />
        <div className='btns'>
          <button className='about page-btn'>About</button>
          <button className='contact page-btn'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
