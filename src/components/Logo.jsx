import Link from 'next/link'
import React from 'react'

const Logo = ({ home }) => {
  return (
    <Link href={`${home === false ? "#" : "/"}`}>
      <h1 className='text-3xl font-bold md:text-3xl lg:text-3xl'><span className='text-primary'>Form<span className='text-secondary-foreground'>ify</span></span></h1>
    </Link>
  )
}

export default Logo
