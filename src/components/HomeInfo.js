import Link from 'next/link'
import { BsPeople, BsBagCheck, BsGear, BsChatText } from 'react-icons/bs'
const HomeInfo = ({ homeInfoRef }) => {
  return (
    <section className='home-info section' ref={homeInfoRef}>
      <div className='section-inner'>
        <h4 className='section-title'>About Lind Designs</h4>
        <div className='grid'>
          <article className='about'>
            <div className='icon-container'>
              <BsPeople className='icon' />
            </div>
            <h3 className='article-title'>About Us</h3>
            <p className='article-text'>
              Lind Designs is a provider of enterprise technology solutions and
              services, with expertise enabling organizations to overcome
              obstacles and achieve excellent business results. We help
              companies streamline and improve the way they buy, implement and
              manage their technology.
            </p>
          </article>
          <article className='products'>
            <div className='icon-container'>
              <BsBagCheck className='icon' />
            </div>
            <h3 className='article-title'>Products</h3>
            <p className='article-text'>
              Leading vendor partners:
              <ul>
                <li>
                  <a
                    href='https://www.hpe.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    HPE
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.microsoft.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Microsoft
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.vmware.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    VMware
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.veeam.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Veeam
                  </a>
                </li>
              </ul>
            </p>
          </article>
          <article className='services'>
            <div className='icon-container'>
              <BsGear className='icon' />
            </div>
            <h3 className='article-title'>Services</h3>
            <p className='article-text'>
              We specialize in virtualization and backup services tailored to
              your servicing needs.
            </p>
          </article>
          <article className='contact'>
            <div className='icon-container'>
              <BsChatText className='icon' />
            </div>
            <h3 className='article-title'>Contact us</h3>
            <p className='article-text'>
              Email info@linddesigns for a free consultation.
            </p>
            <Link href='/contact'>
              <button className='page-btn'>Contact</button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeInfo
