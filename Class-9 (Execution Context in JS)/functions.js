// // add two numbers

// // function creation (traditional way of creating a function)
// function addTwoNumbers(a ,b){
//    let sum = a+b
//    console.log(sum)
// }


// // how to call or invove a function

// addTwoNumbers(1,2)


// addTwoNumbers('Mrinal' , 'Scaler')


// Functions as first class Citizens

function sayHi(){
    console.log('Hi')
} // this is a traditional function

 sayHi()

// Functions as Expressions
let sayHiFC = function(){
    console.log('Hi')
} // first class function


console.log(sayHiFC)

sayHiFC()


// create a multiply 2 numbers function and use fist class citizen concept

let multipy2 = function(n , m){
    console.log(n*m)
}

multipy2(2 , 3)



//Arrow functions


let substarct2 =(a ,b)=> {
    console.log(a-b)
}

substarct2(5 , 3)








