import React from 'react'
import Child3 from './Child3'
import Child4 from './Child4'
import { useContext } from 'react'

import { ParkContext } from './ParkContext'


function Parent2() {

   const rulesAndTikcets = useContext(ParkContext)

   console.log('Parent2 -> ' , rulesAndTikcets)
  return (
    <>
    <div className='parent'>Parent2</div>
     <Child3/>
     <Child4/>
    </>
  )
}

export default Parent2