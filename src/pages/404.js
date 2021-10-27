import Link from 'next/link'

const Error = () => {
  return (
    <div className='page error-page'>
      <h1>Error. This page doesn't exist!</h1>
      <button className='section-btn'>
        <Link href='/'>Return Home</Link>
      </button>
    </div>
  )
}

export default Error
