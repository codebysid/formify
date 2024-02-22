import Link from 'next/link'
import React from 'react'
import { Button } from '../components/ui/button'

const Footer = () => {
  const details = [
    { name: "Twitter", link: "https://twitter.com/codebysid" },
    { name: "LinkedIN", link: "https://www.linkedin.com/in/siddhantjainnn/" }
  ]
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Made with 💜 by Siddhant Jain</h1>
      <div className='flex flex-row gap-5 items-center justify-center'>
        <span className='text-primary'>&#10100;</span>
        {
          details.map((socialHandle, key) => {
            return <div key={key}>
              <Button variant="ghost" size="sm" asChild>
                <Link target='_blank' href={socialHandle.link}><span>{socialHandle.name}</span></Link>
              </Button>
            </div>
          })
        }
        <span className='text-primary'>&#10101;</span>
      </div>
    </div>
  )
}

export default Footer
