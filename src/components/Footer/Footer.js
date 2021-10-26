import React from 'react'
import './Footer.css'
import logo from '../../assets/images/ld-logo-black.png'
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='Lind Designs' />
      <p className='copyright'>
        © Copyright {new Date().getFullYear()} Lind Designs
      </p>
    </footer>
  )
}

export default Footer
