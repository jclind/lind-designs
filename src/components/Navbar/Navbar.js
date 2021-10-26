import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
          <NavLink className='logo' to='/' exact={true}>
            <img src={logo} alt='Lind Designs' />
          </NavLink>
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
              <NavLink
                className='nav-link'
                to={path}
                activeClassName='active-link'
                exact={true}
              >
                {name}
              </NavLink>
            )
          })}
          <NavLink className='nav-link contact-link' to='/contact' exact={true}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
