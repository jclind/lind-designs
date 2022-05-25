import 'normalize.css'
import '../styles/index.scss'
import '../styles/Contact.scss'
import '../styles/404.scss'
import '../styles/Navbar.scss'
import '../styles/Footer.scss'
import '../styles/HomeHero.scss'
import '../styles/HomeInfo.scss'

import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
