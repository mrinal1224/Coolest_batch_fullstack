const fs = require("fs");

console.log("before");

// fs.readFile("f1.txt", (err, data1) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("This is File 1 data ->" + data1);
// });

let promiseReadFile1 = fs.promises.readFile("f1.txt");
let promiseReadFile2 = fs.promises.readFile("f7.txt");
let promiseReadFile3 = fs.promises.readFile("f3.txt");

function readFileCallback(data) {
  console.log("The File data -> " + data);
}

function handleError(err) {
  console.log("Error Statement -> " + err);
}

promiseReadFile1.then(readFileCallback).catch(handleError);
promiseReadFile2.then(readFileCallback).catch(handleError);
promiseReadFile3.then(readFileCallback).catch(handleError);



console.log("After");
