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
import { Skeleton } from "./ui/skeleton"
import ResponseData from "./ResponseData"
import { useToast } from "./ui/use-toast"

const CustomAlert = ({ formId }) => {
  const user = useUser()
  const [responseData, setResponseData] = useState([])
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleGetResponses = async () => {
    if (!formId || !user?._id) {
      toast({ title: "something went wrong", variant: "destructive" })
      return
    }
    try {
      setLoading(true)
      const responses = await getResponses(formId, user._id)
      setResponseData(responses)
      setLoading(false)
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
      <AlertDialogContent className="overflow-auto h-[50%] flex flex-col justify-between items-center">
        <AlertDialogHeader >
          <AlertDialogTitle>Responses</AlertDialogTitle>
          {
            loading && responseData.length === 0 && <Skeleton className="w-full h-full">
              Hold on...
            </Skeleton>
          }
          <div className="flex flex-col gap-5">
            {
              responseData.length > 0 ? responseData.map((ele, key) => {
                return <ResponseData key={key} data={ele.responseData} />
              }) : loading === false && <p>No Response Yet</p>
            }
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomAlert
