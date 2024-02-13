const express = require("express");
const morgan = require("morgan");

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Python" },
];

const app = express();

app.use(express.json()); // build in middleware

// Custom Middlewares
function middleWare1(req, res, next) {
  console.log("This is Middleware 1");
  next();
}

function middleWare2(req, res, next) {
  console.log("This is Middleware 2");
  next();
}

// I want to create a logger middleware

// function logger(req , res , next){
//    console.log(req.method, req.ip , req.hostname,  new Date())
//    next()
// }

app.use(middleWare1);
app.use(middleWare2);
app.use(morgan());

// get , post , put , delete , patch

// get method

// app.get('/' , (req , res)=>{
//     res.send('Hello from Scaler')
// })

// app.get('/about' , (req , res)=>{
//     res.send("I am at the about Page")
// })

// app.get('/contact' , (req , res)=>{
//     res.send("Contact me at abcd@gmail.com")
// }) // Read

app.get("/courses", (req, res) => {
  res.send(courses);
}); // read

// route Parameters

app.get("/courses/:id", (req, res) => {
  console.log(req.params);
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  if (!course) {
    res.status(404).send("The course does not exist");
  }

  res.send(course);
});

// Post method

app.post("/courses", (req, res) => {
  const course = {
    id: req.body.id,
    name: req.body.name,
  };

  courses.push(course);

  res.send(courses);
}); // create an entry // create

// Put Method is to update any entry

app.put("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  if (!course) {
    res.status(404).send("The course does not exist");
  }

  course.name = req.body.name;
  res.send(courses);
}); // Update

// Patch - to be explored

app.delete("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  if (!course) {
    res.status(404).send("The course does not exist");
  }

  const index = courses.indexOf(course);

  courses.splice(index, 1);

  res.send(courses);
});

app.listen(8082, () => {
  console.log("server Started");
});
