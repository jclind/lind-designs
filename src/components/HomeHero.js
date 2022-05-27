import Link from 'next/link'

const HomeHero = ({ scrollToInfo }) => {
  return (
    <div className='home-hero'>
      <div className='content'>
        <div className='text-content'>
          <h3 className='title'>
            Overcome obstacles and achieve excellent results
          </h3>
          <p className='description'>
            Helping companies streamline and improve the way they buy, implement
            and manage their technology.
          </p>
          <button type='button' className='learn-more-btn btn'>
            Learn More
          </button>
        </div>
        <div className='hero-img-container'>
          <img
            src='/hero-svg.png'
            alt='business interview'
            className='hero-img'
          />
        </div>
        {/* <img src='/ld-logo-white-column.png' alt='Lind Designs' />
        <div className='btns'>      
          </button>
          <Link href='/contact'>
            <button className='contact page-btn'>Contact</button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default HomeHero
