import Head from 'next/head'
import { useRef } from 'react'
import HomeHero from '../components/HomeHero'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
  const homeInfoRef = useRef(null)
  const scrollToInfo = () =>
    homeInfoRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Head>
        <title>Lind Designs | Home</title>
      </Head>
      <div className='page home-page'>
        <HomeHero scrollToInfo={scrollToInfo} />
        <HomeInfo homeInfoRef={homeInfoRef} />
      </div>
    </>
  )
}

export default Home
