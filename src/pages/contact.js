import Head from 'next/head'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Lind Designs</title>
        <meta
          name='keywords'
          content='contact lind designs service consultation'
        />
        <meta
          name='description'
          content='Email info@linddesigns for a free virtualization and backup consultation.'
        />
      </Head>
      <div className='contact-page page'>
        <div className='container'>
          <div className='info grid-item'>
            <h1>Contact Us</h1>
            <div className='info-content'>
              <div className='email contact-item'>
                <div className='icon-container'>
                  <AiOutlineMail className='icon' />
                </div>
                info@linddesigns.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
