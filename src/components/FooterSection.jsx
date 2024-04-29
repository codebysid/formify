import React from 'react'
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import TwitterLogo from './TwitterLogo';

const socials = [
  {
    id: 1,
    icon: <Linkedin className='footerIcon' />,
    href: "https://linkedin.com/in/SiddhantJainnn"
  },
  {
    id: 2,
    icon: <TwitterLogo className='footerIcon' />,
    href: "https://twitter.com/codebysid"
  }
]

const FooterSection = () => {

  return (
    <div className='flex flex-col gap-3 justify-center items-center mt-auto text-xs md:text-sm lg:text-sm pt-10 pb-5'>
      <p>Made with 💜 by Siddhant Jain</p>
      <div className='flex flex-row gap-10'>
        &#123;
        {
          socials.map((ele) => {
            return <Link key={ele.id} href={ele.href}>{ele?.icon}</Link>
          })
        }
        &#125;
      </div>
    </div>
  )
}

export default FooterSection
