import { formatDate } from '@/utils/formatDate'
import React from 'react'

const ResponseData = ({ data }) => {

  const checkDates = (date) => {
    const iso8601Format = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    return iso8601Format.test(date) && !isNaN(Date.parse(date))
  }

  return (
    <div className='text-left border-b-2 border-secondary p-2 flex flex-col gap-5'>
      {
        data && Object.entries(data).map((cur, key) => {
          return <p key={key} className='flex flex-row items-start gap-7'><span className='font-bold flex-1 text-primary'>{cur[0]}:-</span><span className='flex-1'>{checkDates(cur[1]) ? formatDate(cur[1]) : cur[1]}</span></p>
        })
      }
    </div>
  )
}

export default ResponseData
