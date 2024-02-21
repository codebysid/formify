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
import { DialogClose } from '@radix-ui/react-dialog'
import React, { useState } from 'react'


const CustomDialog = ({ dialogLabel, callToAction, label, setOptionLabel }) => {
  const [option, setOption] = useState("")
  const { state, dispatch } = useFormData()

  const handleClick = () => {
    setOptionLabel(prev => prev ? [...prev, option] : [option])
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
            <Input value={option} onChange={e => setOption(e.target.value)} className="col-span-3" />
          </div>
        </div>
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
