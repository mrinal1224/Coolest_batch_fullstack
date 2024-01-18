import React from 'react'

function Child2({ticketFn}) {
  return (
    <div className='children'>Child2 {ticketFn()}</div>
  )
}

export default Child2