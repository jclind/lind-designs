import Link from 'next/link'
import Head from 'next/head'

const Error = () => {
  return (
    <>
      <Head>
        <title>404 | Lind Designs</title>
      </Head>
      <div className='page error-page'>
        <h1>Error. This page doesn't exist!</h1>
        <button className='section-btn'>
          <Link href='/'>Return Home</Link>
        </button>
      </div>
    </>
  )
}

export default Error
