import React, { useRef } from 'react'
import HomeHero from '../../components/HomeHero/HomeHero'
import HomeInfo from '../../components/HomeInfo/HomeInfo'

const Home = () => {
  const homeInfoRef = useRef(null)
  const scrollToInfo = () =>
    homeInfoRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className='page home-page'>
      <HomeHero scrollToInfo={scrollToInfo} />
      <HomeInfo homeInfoRef={homeInfoRef} />
    </div>
  )
}

export default Home
