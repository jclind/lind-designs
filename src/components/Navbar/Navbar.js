import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/ld-logo-black.png'
import Hamburger from 'hamburger-react'
import { navLinks } from '../../assets/data/navLinks'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link className='logo' to='/'>
            <img src={logo} alt='Lind Designs' />
          </Link>
          <button
            className={show ? 'nav-btn show' : 'nav-btn'}
            onClick={() => {
              setShow(!show)
            }}
          >
            <Hamburger size={35} hideOutline={true} toggled={show} />
          </button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          {navLinks.map(link => {
            const { name, path } = link
            return (
              <Link className='nav-link' to={path}>
                {name}
              </Link>
            )
          })}
          <Link className='nav-link contact-link' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
