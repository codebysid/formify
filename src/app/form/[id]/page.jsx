import { getForm } from '@/actions/form'
import FormData from '@/components/FormData'
import Logo from '@/components/Logo'
import React from 'react'

const DynamicFormId = async ({ params }) => {
  const form = await getForm(params.id)
  return (
    <div className='relative'>
      <div className='absolute top-10 left-10 md:top-20 md:left-20'>
        <Logo home={false} />
      </div>
      {form && <FormData formData={form} formId={params.id} />}
    </div>
  )
}

export default DynamicFormId
