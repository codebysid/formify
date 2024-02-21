import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/ui/button'
import Logo from '@/components/Logo'

const FormSubmitted = () => {
  return (
    <div className='relative flex flex-col gap-5 items-center justify-center h-[100vh]'>
      <div className='absolute top-10 left-10 md:top-20 md:left-20'>
        <Logo home={false} />
      </div>

      <h1 className='text-3xl'>Form Submitted 🎉 </h1>
      <Button size="lg" asChild>
        <Link href='/'>Go to home</Link>
      </Button>
    </div>
  )
}

export default FormSubmitted
