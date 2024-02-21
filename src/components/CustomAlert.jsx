"use client"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { getResponses } from "@/actions/form"
import useUser from "@/hooks/useUser"
import ResponseData from "./ResponseData"
import { useToast } from "./ui/use-toast"

const CustomAlert = ({ formId }) => {
  const user = useUser()
  const [responseData, setResponseData] = useState([])
  const { toast } = useToast()
  const handleGetResponses = async () => {
    if (!formId || !user?._id) {
      toast({ title: "something went wrong", variant: "destructive" })
      return
    }
    try {
      const responses = await getResponses(formId, user._id)
      responses && setResponseData(responses)
    } catch (err) {
      console.log(err)
      toast({ title: "something went wrong", variant: "destructive" })
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" onClick={handleGetResponses}>View Responses</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="overflow-auto h-[50%]">
        <AlertDialogHeader >
          <AlertDialogTitle>Responses</AlertDialogTitle>
          {
            responseData && responseData.map((ele, key) => {
              return <ResponseData key={key} data={ele.responseData} />
            })
          }
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomAlert
