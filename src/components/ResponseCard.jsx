import React from 'react'
import CustomAlert from './CustomAlert'
import CopyFormUrl from './CopyFormUrl'

const ResponseCard = ({ formName, formId }) => {
  return (
    <div className='flex w-full items-center justify-evenly lg:justify-center md:justify-center md:gap-10'>
      <h1 className='text-left w-[20%] break-words'>{formName}</h1>
      <CopyFormUrl createdFormId={formId} onlyFormUrl={true} />
      <CustomAlert formId={formId} />
    </div>
  )
}

export default ResponseCard
