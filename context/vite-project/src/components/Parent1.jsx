import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent1({parkInfo}) {
  return (
    <>
    <div className='parent'>Parent1 - {parkInfo.waterSlide}  -  {parkInfo.rollerCoaster}</div>
       <Child1 ticketFn={parkInfo.ticketforWaterSlide} />
       <Child2 ticketFn={parkInfo.ticketForRollerCoaster} />
    </>
  )
}

export default Parent1