import React from 'react'
import { useHistory } from 'react-router'
import './Error.css'

const Error = () => {
  const history = useHistory()

  return (
    <div className='page error-page'>
      <h1>Error. This page doesn't exist!</h1>
      <button className='section-btn' onClick={() => history.push('/')}>
        Return Home
      </button>
    </div>
  )
}

export default Error
