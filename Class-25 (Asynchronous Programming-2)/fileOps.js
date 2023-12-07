const fs = require("fs");

console.log("before");

// fs.readFile("f1.txt", (err, data1) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("This is File 1 data ->" + data1);
// });



let promiseReadFile = fs.promises.readFile('f1.txt')

promiseReadFile.then(function(data){
    console.log('the file data is -> '+ data)
})
promiseReadFile.catch(function(err){
    console.log(err)
})


let promiseReadFile2 = fs.promises.readFile('f2.txt')

promiseReadFile2.then(function(data2){
    console.log('the file data is -> '+ data2)
})
promiseReadFile2.catch(function(err){
    console.log(err)
})

let promiseReadFile3 = fs.promises.readFile('f3.txt')

promiseReadFile3.then(function(data3){
    console.log('the file data is -> '+ data3)
})
promiseReadFile3.catch(function(err){
    console.log(err)
})

console.log('After')

