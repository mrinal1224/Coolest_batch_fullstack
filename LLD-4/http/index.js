const http = require('http')

const fs = require('fs')



let JsonData = fs.readFileSync('data.json')


const server = http.createServer((req , res)=>{
    console.log("Server Started")
    // res.end("hello")
    // res.setHeader('Content-type' , 'text/html')
    res.end(JsonData)

})


server.listen(8081)







