const fs = require("fs");

console.log("before");

fs.readFile("f1.txt", (err, data1) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("This is File 1 data ->" + data1);
});
