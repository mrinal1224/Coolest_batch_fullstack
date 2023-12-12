// Q5 Name Initials

// const input = "George Raymond Richard Martin";
// output = GRRM



// solution 

// const input = "George Raymond Richard Martin"

// const output = input.split(' ').map(function(word){
//     return word[0]
// }).join('')


// console.log(output)



//   Q2. Given an array of objects users, print user of particular age along with their frequency.

//   const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26}, 
//     {firstName:"Sachin",lastName:"Tendulkar",age:50}, 
//     {firstName:"Sachin",lastName:"Tendulkar",age:50},
//   ];


//   ouput ->
//   26 - 2
//   75 - 1
//   50 - 2


// const ans = users.reduce(function(acc , curr){
//     if(acc[curr.age]){
//         acc[curr.age]++
//     }
//     else{
//         acc[curr.age] = 1
//     }

//     return acc
// } , {})


// console.log(ans)



// method Chaining

// // Q4 Print the names of students who scored more than 60


let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
   ];


   const results = student.filter(function(obj){
    return obj.marks > 60
   }).map(function(obj){
    return obj.name
   })

   console.log(results)


// Q1. Given an array of objects users, print fullname.


// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ];


// Solution here ->



// // Q3.Print object having marks greater than 60 and rollNumber greater than 15.

// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];



// Solution here ->


























