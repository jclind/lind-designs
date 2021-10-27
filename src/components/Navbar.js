import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { navLinks } from '../assets/data/navLinks'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setShow(false)
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo-container'>
            <Link href='/' exact={true} onClick={handleClick}>
              <img
                src='/ld-logo-black.png'
                alt='Lind Designs'
                className='logo'
              />
            </Link>
          </div>
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
              <div
                className={
                  router.pathname == path ? 'nav-link active-link' : 'nav-link'
                }
                onClick={handleClick}
              >
                <Link href={path}>{name}</Link>
              </div>
            )
          })}
          <div className='nav-link contact-link' onClick={handleClick}>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
