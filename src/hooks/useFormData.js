"use client"
import { useContext } from "react"
import { FormContext } from "../providers/FormDataProvider"
const useFormData = () => {
  const value = useContext(FormContext)
  return value
}

export default useFormData
