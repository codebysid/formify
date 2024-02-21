"use client"
import { FormResponseContext } from "@/providers/FormResponseProvider"
import { useContext } from "react"

const useFormResponse = () => {
  const value = useContext(FormResponseContext)
  return value
}

export default useFormResponse
