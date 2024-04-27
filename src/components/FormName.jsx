"use client"
import useFormData from '@/hooks/useFormData'
import useUser from '@/hooks/useUser'
import { formReducerActions } from '@/reducers/formDataReducer'
import React, { useState } from 'react'
import { Input } from "../components/ui/input"
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { saveForm } from '@/actions/form'
import CopyFormUrl from './CopyFormUrl'

const FormName = () => {
  const { state, dispatch } = useFormData()
  const { toast } = useToast()
  const [createdFormId, setCreatedFormId] = useState("")
  const user = useUser()

  const handleAction = async (formData) => {
    try {
      const formName = formData.get("formName")
      if (!state.length > 0) {
        toast({
          title: "Add atleast one element 🤦"
        })
        return
      }
      const createdFormId = await saveForm(formName, state, user._id)
      setCreatedFormId(createdFormId)
      dispatch({ type: formReducerActions.RESET_STATE })
      formData.delete("formName")
      toast({ title: "Form Saved ✅" })
    } catch (err) {
      toast({ title: "something went wrong", variant: "destructive" })
      console.log(err)
    }

  }

  return (
    <>
      <form action={(formData) => handleAction(formData)} className='flex flex-col gap-5'>
        <Input name="formName" type="text" placeholder="enter form name" required />
        <Button type="submit">Save Form</Button>
      </form>
      <div className='w-full flex justify-center relative'>
        {
          createdFormId && <CopyFormUrl createdFormId={createdFormId} />
        }
      </div>
    </>
  )
}

export default FormName
