import Link from 'next/link'
import React from 'react'

const Logo = ({ home }) => {
  return (
    <Link href={`${home === false ? "#" : "/"}`}>
      <h1 className='text-4xl font-bold md:text-5xl'><span className='text-primary'>Form<span className='text-secondary'>ify</span></span></h1>
    </Link>
  )
}

export default Logo
