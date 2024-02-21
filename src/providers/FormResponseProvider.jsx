"use client"
import { reducer } from "../reducers/formResponseReducer"
import { createContext, useReducer } from "react"

export const FormResponseContext = createContext()

const FormResponseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {})
  return (
    <FormResponseContext.Provider value={{ state, dispatch }}>
      {children}
    </FormResponseContext.Provider>
  )
}

export default FormResponseProvider
