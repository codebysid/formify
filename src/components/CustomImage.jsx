import Image from 'next/image'
import React from 'react'

const CustomImage = ({ src }) => {
  return (
    <Image src={src} height={450} width={450} className='mr-10 rounded-2xl' />
  )
}

export default CustomImage
