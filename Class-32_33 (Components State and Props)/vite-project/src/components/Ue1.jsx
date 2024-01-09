import React , {useState} from 'react'
import { useEffect } from 'react'

function Ue1() {
    const [count , setCount] = useState(0)
    const [text , setText] = useState('')


    function increment(){
        setCount(count+1)
    }

function handleChange (e){
    setText(e.target.value)
}

    // Syntax of useEffect

    // useEffect(()=>{
    //     console.log('Use Effect Runs')
    //     document.title = `Button clicked for ${count} times`
    // }) // this will only when you mount and when you update anything

    // useEffect(()=>{
    //     console.log('Use Effect Runs')
    //     document.title = `Button clicked for ${count} times`
    // } , []) // this will only run when you mount and not when you update

    useEffect(()=>{
        console.log('Use Effect Runs')
        document.title = `Button clicked for ${count} times`
    } , [count]) // this will only run when you mount  when you update the count


  return (
    <div>

        <h1>This is my Count Value : {count}</h1>
        <button onClick={increment}>Increment</button>
        <input onChange={handleChange} type='text' value={text}/>
    </div>
  )
}

export default Ue1