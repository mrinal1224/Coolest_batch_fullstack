import React, { useState , useTransition } from "react";

function List() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const [isPending , startTransition] = useTransition()

  const LIST_SIZE = 11000;



  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(()=>{
        const newList = [];
        
        for (let i = 0; i < LIST_SIZE; i++) {
            newList.push(e.target.value);
          }
      
          setList(newList);
    })
    
 
  };


  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />

      <div>
        {isPending? <h1>Loading...</h1> : list.map((item)=>{
            return <p>{item}</p>
        })}
      </div>
    </div>
  );
}

export default List;
