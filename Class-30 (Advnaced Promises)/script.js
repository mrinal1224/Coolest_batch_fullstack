// console.log('Start')

// function printName(name , cb){
//     setTimeout(()=>{
//         cb(`My name is ${name}`)
//       })
// }

// let message = printName('Steve' , function(resultName){
//     console.log(resultName)
// }) // it runs and then and there

// console.log('End')

// Callback hell

// function Action1(name , cb){
//     setTimeout(()=>{
//         cb(`My name is ${name}`)
//     } , 1000)
// }

// function Action2(age , cb){
//     setTimeout(()=>{
//         cb(`My age is ${age}`)
//     } , 3000)
// }

// function Action3(occupation , cb){
//     setTimeout(()=>{
//         cb(`I am a ${occupation}`)
//     } , 2000)
// }

// Callback hell

// Action1("Steve", function (name) {
//     console.log(name); // steve
//     Action2(24, function (age) {
//       console.log(age);
//       Action3("Software Engineer", function (occupation) {
//         console.log(occupation);
//         Action4("Software Engineer", function (occupation) {
//           console.log(occupation);
//           Action4("Software Engineer", function (occupation) {
//             console.log(occupation);
//             Action4("Software Engineer", function (occupation) {
//               console.log(occupation);
//             });
//           });
//         });
//       });
//     });
//   });

// Promisified Functions

function Action1(name, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb(`My name is ${name}`);
    }, 1000);
  });
}

function Action2(age, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb(`My age is ${age}`);
    }, 1000);
  });
}

function Action3(occupation, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb(`I am a ${occupation}`);
    }, 1000);
  });
}

// Promise Hell
// Action1('Steve').then((name)=>{
//     console.log(name)
//     Action2.then((res)=>{
//         console.log(res)
//         Action3.then((res)=>{
//             console.log(res)
//         })
//     })
// })

// Promise Chaining

Action1("Steve")
  .then((name) => {
    console.log(name);
    return Action2(24);
  })
  .then((age) => {
    console.log(age);
    return Action3("Software Engineer");
  })
  .then((occupation) => {
    console.log(occupation);
  });


