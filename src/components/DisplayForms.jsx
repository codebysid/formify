import React from 'react'
import ResponseCard from './ResponseCard'

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
