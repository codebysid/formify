import React from 'react'
import { Input } from '../components/ui/input'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'

const FormInput = ({ label }) => {
  return (
    <FormField name={label} render={({ field }) => {
      return <FormItem>
        <FormLabel>
          <span className='labelForForm'>
            {label}
          </span>
        </FormLabel>
        <FormControl>
          <Input className="md:w-[200%]" id={label} {...field} />
        </FormControl>
      </FormItem>
    }}>
    </FormField>
  )
}

export default FormInput
