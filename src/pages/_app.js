import 'normalize.css'
import '../styles/globals.css'
import '../styles/Contact.css'
import '../styles/404.css'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/HomeHero.css'
import '../styles/HomeInfo.css'

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
