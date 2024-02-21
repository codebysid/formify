"use client"
import useFormData from '@/hooks/useFormData'
import useUser from '@/hooks/useUser'
import { formReducerActions } from '@/reducers/formDataReducer'
import React, { useEffect, useState } from 'react'
import { Input } from "../components/ui/input"
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { saveForm } from '@/actions/form'
import { Copy } from 'lucide-react'

const FormName = () => {
  const { state, dispatch } = useFormData()
  const { toast } = useToast()
  const [formUrl, setFormUrl] = useState("")
  const user = useUser()
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(formUrl).then(() => {
      toast({ title: "URL Copied 👍" })
    }).catch(() => {
      toast({ title: "Not supported", variant: "destructive" })
    })
  }
  return (
    <>
      <form action={async (formData) => {
        try {
          const formName = formData.get("formName")
          if (!state.length > 0) {
            toast({
              title: "Add atleast one element 🤦"
            })
            return
          }
          const createdFormId = await saveForm(formName, state, user._id)
          dispatch({ type: formReducerActions.RESET_STATE })
          formData.delete("formName")
          toast({ title: "Form Saved ✅" })
          setFormUrl(`${process.env.NEXT_PUBLIC_NEXT_URL}/form/${createdFormId}`)
        } catch (err) {
          toast({ title: "something went wrong", variant: "destructive" })
          console.log(err)
        }
      }} className='flex flex-col gap-5 '>
        <Input name="formName" type="text" placeholder="enter form name" required />
        <Button type="submit">Save Form</Button>
      </form>
      {
        formUrl &&
        <>
          <p className='text-xs'>{formUrl}</p>
          <Button variant="outline" size="sm" onClick={handleCopyUrl}><Copy size={18} /></Button>
        </>
      }
    </>
  )
}

export default FormName
