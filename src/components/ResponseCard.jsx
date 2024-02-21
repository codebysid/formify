import React from 'react'
import CustomAlert from './CustomAlert'

const ResponseCard = ({ formName, formId }) => {
  return (
    <div className='flex w-full items-center justify-end md:gap-60 md:pr-72 gap-20 pr-14'>
      <h1 className='text-left'>{formName}</h1>
      <CustomAlert formId={formId} />
    </div>
  )
}

export default ResponseCard
