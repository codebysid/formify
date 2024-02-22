"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useFormData from '@/hooks/useFormData'
import { formReducerActions } from '@/reducers/formDataReducer'
import { DialogClose } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import RadioOptionDialog from "../components/RadioOptionDialog"
import { useToast } from "./ui/use-toast"

const CustomDialog = ({ dialogLabel, callToAction, fieldName }) => {
  const [label, setLabel] = useState("")
  const [optionLabel, setOptionLabel] = useState("")
  const { dispatch } = useFormData()
  const { toast } = useToast()
  const handleClick = () => {
    if (fieldName === "radio") {
      if (!label || !optionLabel.length > 0) {
        toast({ title: "Must add Radio lable and atleast one option" })
        return
      }
      dispatch({
        type: formReducerActions.ADD_RADIO, payload: { fieldName, label, optionLabel }
      })
    }
    else {
      if (!label) {
        toast({ title: "Label cant be empty 🤦" })
        return
      }
      dispatch({
        type: formReducerActions.ADD_DATA, payload: {
          fieldName, label
        }
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{callToAction}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              {dialogLabel}
            </Label>
            <Input value={label} onChange={(e) => setLabel(e.target.value)} className="col-span-3" />
          </div>
        </div>
        {
          optionLabel && optionLabel.map((ele, key) => <li key={key}>{ele}</li>)
        }
        {
          fieldName === "radio" && <RadioOptionDialog dialogLabel="Option" callToAction="Add Option" fieldName="radioOptions" label={label} setOptionLabel={setOptionLabel} />
        }

        <DialogClose>
          <DialogFooter asChild>

            <Button onClick={handleClick} type="submit">{callToAction}</Button>
          </DialogFooter>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default CustomDialog
