import React from 'react'

function Products() {
 let products = ['Laptops' , 'Headphones' , 'Mouse' , 'Keyboard' , "Laptops"]
  return (
    <div>
        <ul>
        {products.map((product , index)=>{
             return <li key={index}>{index}{product}</li>
        })}
        </ul>
    </div>
  )
}

export default Products