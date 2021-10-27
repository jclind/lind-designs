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
        <title>Home | Lind Designs</title>
        <meta
          name='keywords'
          content='technology services, virtualization, backup service'
        />
        <meta
          name='description'
          content='Lind Designs is a provider of enterprise technology solutions and services.'
        />
        <meta charSet='utf8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Jesse Lind' />
      </Head>
      <div className='page home-page'>
        <HomeHero scrollToInfo={scrollToInfo} />
        <HomeInfo homeInfoRef={homeInfoRef} />
      </div>
    </>
  )
}

export default Home
