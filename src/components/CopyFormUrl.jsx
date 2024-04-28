"use client"
import React from 'react'
import { useToast } from './ui/use-toast'
import { Button } from './ui/button'
import { Copy } from 'lucide-react'

const CopyFormUrl = ({ createdFormId, onlyFormUrl }) => {
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
    <div className={`flex flex-col gap-3 justify-center items-center w-11/12 ${!onlyFormUrl && "absolute"} ${onlyFormUrl && "w-1/3 lg:w-1/4 md:w-1/4"}`} >
      <div className=' w-full flex flex-row gap-2 items-center'>
        <span className={`w-full break-words bg-gray-800 rounded-xl p-2 text-xs ${onlyFormUrl && "lg:w-fit md:w-fit"}`}>{formUrl}</span>
        {
          !onlyFormUrl && <Button variant="outline" onClick={handleCopyUrl} className="flex flex-row gap-2"><Copy size={12} /></Button>
        }
      </div>
      {
        !onlyFormUrl && <span className='text-center'>Copy this url and share to collect data</span>
      }
    </div>
  )
}

export default CopyFormUrl
