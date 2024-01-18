import React from 'react'

function Child1({ticketFn}) {
  return (
    <div className='children'>Child1 {ticketFn()}</div>
  )
}

export default Child1