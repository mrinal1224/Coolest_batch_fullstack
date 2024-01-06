import React , {useState} from 'react'

function Form() {

    const [firstName , setFirstName] = useState('')

     let handleChange =(e)=>{
       setFirstName(e.target.value)
     }


  return (
    <div>
        <h1>This is a Form</h1>

        <form>
            <label>FirstName </label>
            <input onChange={handleChange}  type='text' value={firstName}/>
       

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form