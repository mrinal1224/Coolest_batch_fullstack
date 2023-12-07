const fs = require("fs");

console.log("before");

fs.readFile("f1.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("The File data ->" + data);
  fs.readFile("f2.txt", cb2);
}

function cb2(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("The File 2 data ->" + data);
  fs.readFile("f3.txt", cb3);
}

function cb3(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("The File 3 data ->" + data);
}

console.log("after");
