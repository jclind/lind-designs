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
          <button
            type='button'
            className='learn-more-btn btn'
            onClick={scrollToInfo}
          >
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
      </div>
    </div>
  )
}

export default HomeHero
