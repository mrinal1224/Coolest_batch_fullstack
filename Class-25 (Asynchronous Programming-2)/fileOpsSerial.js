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

function cb1(data) {
  console.log("this is File 1 Data -> " + data); // file 1 ouput
  let promiseReadFile2 = fs.promises.readFile("f5.txt");
  return promiseReadFile2;
}

function cb2(data) {
  console.log("This is File 2 data -> " + data);
  let promiseReadFile3 = fs.promises.readFile("f3.txt");
  return promiseReadFile3;
}

function cb3(data) {
  console.log("this is file 3 data -> " + data);
}

function handleError(err) {
  console.log("Error Statement -> " + err);
}

promiseReadFile1.then(cb1).then(cb2).then(cb3).catch(handleError);

console.log("After");



