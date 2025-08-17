import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
      <div className='footer'>&copy;{year} <b>Dream Nexus</b>. All Rights Reserved.</div>
  )
}

export default Footer