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

function Action1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My name is ${name}`);
    }, 2000);
  });
}

function Action2(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My age is ${age}`);
    }, 3000);
  });
}

function Action3(occupation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am a ${occupation}`);
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

// Action1("Steve")
//   .then((name) => {
//     console.log(name);
//     return Action2(24);
//   })
//   .then((age) => {
//     console.log(age);
//     return Action3("Software Engineer");
//   })
//   .then((occupation) => {
//     console.log(occupation);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise Combinators

// .all , .race , .allSettled , .any

Action1("Steve");
Action2(24);
Action3("Software Engineer");

// Promise.all

// Promise.all([Action1("Steve"), Action2(24), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });


// Promise.race

// Promise.race([Action1("Steve"), Action2(24), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });


// Promise.allSettled

// Promise.allSettled([Action1("Steve"), Action2(24), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.err("Error Promise Rejected : " + err)
// });



Promise.race([Action2(24) ,Action1("Steve"), Action3("Software Engineer")]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});

// Promise.any

Promise.any([Action2(24), Action1("Steve"), Action3("Software Engineer")]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});




















