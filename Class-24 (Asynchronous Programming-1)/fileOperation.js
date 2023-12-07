// import the fs module

const fs = require("fs");

console.log("Before");

let data1 = fs.readFileSync("f1.txt");
let data2 = fs.readFileSync("f2.txt");

console.log("data from File 1->  " + data1);
console.log("data from File 1->  " + data2);

console.log("After");
