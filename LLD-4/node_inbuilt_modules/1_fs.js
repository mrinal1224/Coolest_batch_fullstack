const fs = require('fs')
const path = require('path')


// 1.Read , Write , Update , delete your files


// read a file

// let data = fs.readFileSync('f1.txt')

// console.log("file1 -> "+ data)


// Write a File

// fs.writeFileSync('f2.txt' , "This is my Content")
// fs.writeFileSync('f2.txt' , "New data") // writes content to f2

// fs.writeFileSync('f3.txt' , "this is my content in f3 file")


// update or append your file

//  fs.appendFileSync('f2.txt' , 'This is the updated Content')


// Delete a file

//  fs.unlinkSync('f3.txt')


 // Fs module with Directories

 //Create and Delete a Directory (folders)

//  fs.mkdirSync('myDirectory1')
//  fs.mkdirSync('myDirectory2')
//  fs.mkdirSync('myDirectory3')

//  console.log('Directory Created')

//  fs.rmdirSync('myDirectory2')

//  console.log("directory2 Deleted")


 // exitsSync - will help you to check if a file or directory exists or not


//  let doesExist = fs.existsSync('myDirectory6')

//  console.log(doesExist)

// We will do an Exercise

//  Copy a file from srcFolder to Destinatiom folder


let srcFilePath = '/Users/admin/Desktop/Coolest Batch/LLD-4/node_inbuilt_modules/f1.txt'

let destDirectoryPath = '/Users/admin/Desktop/Coolest Batch/LLD-4/node_inbuilt_modules/myDirectory1/'


let toBeCopiedFileName = path.basename(srcFilePath)

console.log(toBeCopiedFileName)

const destPath = path.join(destDirectoryPath , toBeCopiedFileName)

console.log(destPath)


fs.copyFileSync(srcFilePath , destPath)

fs.unlinkSync(srcFilePath)

 



 



















