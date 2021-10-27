import Link from 'next/link'

const HomeHero = ({ scrollToInfo }) => {
  return (
    <div className='home-hero'>
      <div className='content'>
        <img src='/ld-logo-white-column.png' alt='Lind Designs' />
        <div className='btns'>
          <button className='about page-btn' onClick={scrollToInfo}>
            About
          </button>
          <Link href='/contact'>
            <button className='contact page-btn'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
