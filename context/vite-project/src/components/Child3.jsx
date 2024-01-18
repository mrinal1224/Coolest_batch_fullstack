import React from 'react'

import { useContext } from 'react'
import { ParkContext } from './ParkContext'

function Child3() {

    const rulesAndTikcets = useContext(ParkContext)

    console.log("children -> " , rulesAndTikcets)
  return (
    <div className='children'>Child3 {rulesAndTikcets.ticketForMerryGoRound()}</div>
  )
}

export default Child3