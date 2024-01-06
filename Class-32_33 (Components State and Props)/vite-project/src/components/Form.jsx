import React , {useState} from 'react'

function Form() {

    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    

     let handleFirstName =(e)=>{
       setFirstName(e.target.value)
     }

     let handleLastName =(e)=>{
        setLastName(e.target.value)
      }

     let handleSubmit=(e)=>{
       e.preventDefault()
       console.log({
         fname : firstName,
         lName : lastName
       })
     }


  return (
    <div>
        <h1 >This is a Form</h1>

        <form>
            <label>FirstName </label>
            <input onChange={handleFirstName}  type='text' value={firstName}/>

            <label>LastName </label>
            <input onChange={handleLastName}  type='text' value={lastName}/>
       

            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Form