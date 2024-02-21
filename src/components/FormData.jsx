"use client"
import { saveFormResponse } from '@/actions/form'
import useUser from '@/hooks/useUser'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/ui/button'
import { Form } from '../components/ui/form'
import FormCard from './FormCard'
import StepDecreaseButton from './StepDecreaseButton'
import StepIncreaseButton from './StepIncreaseButton'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'

const FormData = ({ formData, formId }) => {
  const user = useUser()
  const [step, setStep] = useState(0)
  const form = useForm()
  const router = useRouter()
  const { toast } = useToast()
  const onSubmit = async (data) => {
    if (!data || !formId) {
      toast({ title: "nothing to add 🤦" })
      return
    }
    try {
      await saveFormResponse(data, formId, user._id)
      router.push("/formSubmitted")
    } catch (err) {
      console.log(err)
      toast({ ttile: "something went wrong", variant: "destructive" })
    }
  }

  return (
    <div>
      <Form {...form}>
        <form className='flex flex-col items-start justify-center h-[90vh] gap-10 pl-20 md:pl-60' onSubmit={form.handleSubmit(onSubmit)} >
          {
            formData.formData.map((ele, index) => {
              switch (step) {
                case index: {
                  return <div className='flex flex-col gap-5' key={index}>
                    <div className='flex'>
                      <FormCard formElement={ele} />
                    </div>
                    <div className='flex flex-row gap-14 items-center'>
                      <StepDecreaseButton setStep={setStep} step={step} />
                      <StepIncreaseButton setStep={setStep} step={step} max={formData.formData.length} />
                    </div>
                  </div>
                }
              }
            })
          }
          <Button size="lg" type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
export default FormData
