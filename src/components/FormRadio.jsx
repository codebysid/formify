import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import React from 'react'
import { FormField, FormItem, FormLabel } from './ui/form'

const FormRadio = ({ label, options }) => {
  return (
    <FormField name={label} render={({ field }) => {
      return <FormItem>
        <FormLabel className="labelForForm">{label}</FormLabel>
        <RadioGroup defaultValue={field.value} onValueChange={field.onChange}>
          <div className="flex flex-col gap-4 pl-6">
            {
              options.map((ele, key) => {
                return <FormItem key={key}>
                  <RadioGroupItem value={ele} id={ele} />
                  <FormLabel className="pl-2 md:text-xl" htmlFor={ele}>{ele}</FormLabel>
                </FormItem>
              })
            }
          </div>
        </RadioGroup>
      </FormItem>
    }}>
    </FormField>
  )
}

export default FormRadio
