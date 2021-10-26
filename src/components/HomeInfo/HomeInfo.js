import React from 'react'
import { useHistory } from 'react-router'
import './HomeInfo.css'
import {
  BsPeople,
  BsBagCheck,
  BsGear,
  BsChatText,
  BsChat,
} from 'react-icons/bs'
const HomeInfo = ({ homeInfoRef }) => {
  const history = useHistory()

  return (
    <section className='home-info section' ref={homeInfoRef}>
      <div className='section-inner'>
        <h1 className='section-title'>Welcome to Lind Designs</h1>
        <div className='grid'>
          <article className='about'>
            <div className='icon-container'>
              <BsPeople className='icon' />
            </div>
            <h2 className='article-title'>About Us</h2>
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
            <h2 className='article-title'>Products</h2>
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
            <h2 className='article-title'>Services</h2>
            <p className='article-text'>
              We specialize in virtualization and backup services tailored to
              your servicing needs.
            </p>
          </article>
          <article className='contact'>
            <div className='icon-container'>
              <BsChatText className='icon' />
            </div>
            <h2 className='article-title'>Contact us</h2>
            <p className='article-text'>
              Email info@linddesigns for a free consultation.
            </p>
            <button
              className='page-btn'
              onClick={() => history.push('/contact')}
            >
              Contact
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeInfo
