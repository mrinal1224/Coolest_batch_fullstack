const fs = require('fs')


// 1.Read , Write , Update , delete your files


// read a file

// let data = fs.readFileSync('f1.txt')

// console.log("file1 -> "+ data)


// Write a File

fs.writeFileSync('f2.txt' , "This is my Content")
fs.writeFileSync('f2.txt' , "New data") // writes content to f2

// fs.writeFileSync('f3.txt' , "this is my content in f3 file")


// update or append your file

//  fs.appendFileSync('f2.txt' , 'This is the updated Content')


// Delete a file

// fs.unlinkSync('f3.txt')












// Works with Directories


