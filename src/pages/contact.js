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
              {/* <div className='address contact-item'>
              <div className='icon-container'>
                <IoLocationOutline className='icon' />
              </div>
              <div className='text'>
              </div>
            </div> */}
            </div>
          </div>
          {/* <div className='form grid-item'>
          <form action=''>
            <label>
              Name:
              <input type='text' className='name' required />
            </label>
            <label>
              Email:
              <input type='text' className='email' required />
            </label>
            <label>
              Message:
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                className='message'
                required
              ></textarea>
            </label>
            <button className='submit section-btn'>Submit</button>
          </form>
        </div> */}
        </div>
      </div>
    </>
  )
}

export default Contact
