const Footer = () => {
  return (
    <footer className='footer'>
      <img src='/ld-logo-black.png' alt='Lind Designs' />
      <p className='copyright'>
        © Copyright {new Date().getFullYear()} Lind Designs
      </p>
    </footer>
  )
}

export default Footer
