"use client"
import React from 'react'
import { useToast } from './ui/use-toast'
import { Button } from './ui/button'
import { Copy } from 'lucide-react'

const CopyFormUrl = ({ createdFormId }) => {
  const { toast } = useToast()
  const formUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}/form/${createdFormId}`
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(formUrl).then(() => {
      toast({ title: "URL Copied 👍" })
    }).catch(() => {
      toast({ title: "Not supported", variant: "destructive" })
    })
  }

  return (
    <div className='flex flex-col gap-3 justify-center items-center w-11/12 absolute'>
      <div className=' w-full flex flex-row gap-2 items-center'>
        <span className='w-full break-words bg-gray-800 rounded-xl p-2 text-xs'>{formUrl}</span>
        <Button variant="outline" onClick={handleCopyUrl} className="flex flex-row gap-2"><Copy size={12} /></Button>
      </div>
      <span className='text-center'>Copy this url and share to collect data</span>
    </div>
  )
}

export default CopyFormUrl
