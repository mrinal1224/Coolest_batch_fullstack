const express = require('express')

let courses = [

    {id : 1 , name : "java"},
    {id : 2 , name : "JavaScript"},
    {id : 3 , name : "Python"}
]


const app = express()




// get , post , put , delete , patch

// get method

app.get('/' , (req , res)=>{
    res.send('Hello from Scaler')
})

app.get('/about' , (req , res)=>{
    res.send("I am at the about Page")
})

app.get('/contact' , (req , res)=>{
    res.send("Contact me at abcd@gmail.com")
}) // Read 


// app.get('/courses' , (req,res)=>{
//     res.send(courses)
// })


// route Parameters


app.get('/courses/:id' , (req , res)=>{
    console.log(req.params)
    let course = courses.find(course => course.id === parseInt(req.params.id))

    res.send(course)


})





// Post method






app.listen(8082 , ()=>{
    console.log("server Started")
})


