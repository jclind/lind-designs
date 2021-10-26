import React from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className='contact-page page'>
      <div className='container'>
        <div className='info grid-item'>
          <h1>Contact Us</h1>
          <p className='section-text'>
            Email us or fill out the form and we will get back to you promptly
          </p>
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
  )
}

export default Contact
