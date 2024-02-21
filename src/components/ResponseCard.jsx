import React from 'react'
import CustomAlert from './CustomAlert'

const ResponseCard = ({ formName, formId }) => {
  return (
    <div className='flex w-full items-center justify-evenly'>
      <h1 className='text-left w-[20%]'>{formName}</h1>
      <CustomAlert formId={formId} />
    </div>
  )
}

export default ResponseCard
