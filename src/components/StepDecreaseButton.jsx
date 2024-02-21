"use client"
import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react'

const StepDecreaseButton = ({ setStep, step }) => {
  return (
    <>
      {
        step > 0 ? <Button variant="secondary" size="sm" onClick={() => setStep(prev => prev - 1)}> <ChevronLeft size={18} /></Button > : <Button variant="secondary" size="sm" onClick={() => setStep(prev => prev - 1)} disabled> <ChevronLeft size={18} /></Button >

      }
    </>
  )
}

export default StepDecreaseButton
