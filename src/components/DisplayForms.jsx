import React from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from './ui/skeleton'
const ResponseCard = dynamic(() => import('./ResponseCard'), { loading: () => <Skeleton className="w-full h-full" /> })

const DisplayForms = ({ allForms }) => {
  return (
    <div className='flex flex-col gap-6'>
      {
        allForms.map((form) => {
          return <ResponseCard key={form._id} formName={form.name} formId={form._id} />
        })
      }
    </div>
  )
}

export default DisplayForms
