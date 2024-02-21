import React from 'react'
import FormCheckBox from './FormCheckBox'
import FormDatePicker from './FormDatePicker'
import FormInput from './FormInput'
import FormRadio from './FormRadio'

const FormCard = ({ formElement }) => {
  return (
    <>
      {
        formElement.fieldName === "input" && <FormInput label={formElement.label} callToAction={formElement.callToAction} />}
      {
        formElement.fieldName === "checkbox" && <FormCheckBox label={formElement.label} />}
      {
        formElement.fieldName === "datePicker" && <FormDatePicker label={formElement.label} />
      }
      {
        formElement.fieldName === "radio" && <FormRadio label={formElement.label} options={formElement.optionLabel} />
      }
    </>
  )
}

export default FormCard
