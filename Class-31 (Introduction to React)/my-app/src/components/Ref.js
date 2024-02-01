import React, { useState , useRef} from 'react'

function Ref() {

    const [name , setName] = useState('')
    const [name2 , setName2] = useState('')

    const refElement = useRef()
    const refElement2 = useRef()

    console.log(refElement)

    const clear = ()=>{
        setName('')
        refElement.current.focus()
    }

    const clear2 = ()=>{
        setName2('')
        refElement2.current.focus()
    }


    function changeColor(){
       refElement.current.style.color="red"
       refElement2.current.style.color='Blue'
       refElement.current.style.backgroundColor='Yellow'
    }


  return (
    <div>

        <h1>use Ref</h1>

        <input ref={refElement} type='text' value={name} onChange={(e)=> setName(e.target.value)} />
        <input ref={refElement2} type='text' value={name2} onChange={(e)=> setName2(e.target.value)} />
        <button onClick={clear}>Clear1</button>
        <button onClick={clear2}>Clear2</button>
        <button onClick={changeColor}>changeColor</button>
    </div>
  )
}

export default Ref