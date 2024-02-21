import { Checkbox } from "@/components/ui/checkbox"
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'

const FormCheckBox = ({ label }) => {
  return (
    <FormField name={label} render={({ field }) => {
      return <FormItem>
        <FormControl>
          <Checkbox className="md:w-6 md:h-6" id={label} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel className="labelForForm pl-2">{label}</FormLabel>
      </FormItem>
    }}>

    </FormField>

  )
}

export default FormCheckBox
