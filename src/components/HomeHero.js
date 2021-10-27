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
          <button className='contact page-btn'>
            <Link href='/contact'>Contact</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
