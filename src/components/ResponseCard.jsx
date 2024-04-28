import React from 'react'
import CustomAlert from './CustomAlert'
import CopyFormUrl from './CopyFormUrl'

const ResponseCard = ({ formName, formId }) => {
  return (
    <div className='flex w-full items-center justify-evenly lg:justify-center'>
      <h1 className='text-left w-[20%]'>{formName}</h1>
      <CopyFormUrl createdFormId={formId} onlyFormUrl={true} />
      <CustomAlert formId={formId} />
    </div>
  )
}

export default ResponseCard
