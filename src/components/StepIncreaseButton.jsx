import React from 'react'
import { Button } from '../components/ui/button'
import { ChevronRight } from 'lucide-react'

const StepIncreaseButton = ({ setStep, step, max }) => {
  return (
    <>
      {
        step < max - 1 ? <Button variant="secondary" onClick={() => setStep(prev => prev + 1)}><ChevronRight size={18} /></Button> : <Button variant="secondary" onClick={() => setStep(prev => prev + 1)} disabled><ChevronRight size={18} /></Button>


      }
    </>
  )
}

export default StepIncreaseButton
