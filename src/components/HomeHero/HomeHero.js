import React from 'react'
import { useHistory } from 'react-router'
import './HomeHero.css'
import logo from '../../assets/images/ld-logo-white-column.png'
const HomeHero = ({ scrollToInfo }) => {
  const history = useHistory()

  return (
    <div className='home-hero'>
      <div className='content'>
        <img src={logo} alt='Lind Designs' />
        <div className='btns'>
          <button className='about page-btn' onClick={scrollToInfo}>
            About
          </button>
          <button
            onClick={() => history.push('contact')}
            className='contact page-btn'
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
