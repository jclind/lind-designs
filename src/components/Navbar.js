import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { navLinks } from '../assets/data/navLinks'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [show])

  const handleClick = () => {
    setShow(false)
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo-container'>
            <Link href='/' exact={true} onClick={handleClick}>
              {router.pathname === '/' || show ? (
                <img
                  src='/ld-logo-white.png'
                  alt='Lind Designs'
                  className='logo'
                />
              ) : (
                <img
                  src='/ld-logo-black.png'
                  alt='Lind Designs'
                  className='logo'
                />
              )}
            </Link>
          </div>
          <button
            className={`nav-btn ${show ? 'show' : ''} ${
              router.pathname !== '/' ? 'dark-text' : ''
            }`}
            onClick={() => {
              setShow(!show)
            }}
          >
            <Hamburger size={32} hideOutline={true} toggled={show} />
          </button>
        </div>
        <div
          className={`nav-links${show ? ' show-links' : ''}${
            router.pathname !== '/' ? ' dark-text' : ''
          }`}
        >
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
          <button
            onClick={() => {
              router.push('/contact')
              handleClick()
            }}
            className='nav-link contact-link'
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
