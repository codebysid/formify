"use client"
import { reducer } from '@/reducers/formDataReducer'
import React, { createContext, useReducer } from 'react'

export const FormContext = createContext()

const FormDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormDataProvider
