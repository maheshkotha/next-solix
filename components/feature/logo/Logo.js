import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div><Image src='/logo.svg' width={150} height={60} alt='application logo'/></div>
  )
}

export default Logo