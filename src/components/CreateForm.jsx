import React from 'react'
import CustomDialog from './CustomDialog'
import { fields } from "../constants/constants"
import FormName from './FormName'

const CreateForm = () => {

  return (
    <div className='flex items-start '>
      <div className='flex flex-col gap-5'>
        {
          fields.map((ele) => {
            return <CustomDialog key={ele.id} callToAction={ele.callToAction} dialogLabel={ele.titleLabel} fieldName={ele.fieldName} />
          })
        }

        <FormName />
      </div>
    </div>
  )
}

export default CreateForm
