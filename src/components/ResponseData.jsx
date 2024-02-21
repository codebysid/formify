import React from 'react'

const ResponseData = ({ data }) => {
  return (
    <div className='text-left'>
      {
        data && <pre> {JSON.stringify(data, null, 2)}</pre>
      }
    </div>
  )
}

export default ResponseData
