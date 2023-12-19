// add three numbers

// we need to add 2 to every argument and then sum everything


// function add(a ,b , c ){
//     return a+b+c
// }

// console.log(add(1 , 2 ,3))


// function fn1(a){
//    return function fn2(b){
//       return function fn3(c){
//          return a+b+c
//       }
//    }
// }

// let sum = fn1(3)(4)(5)

// console.log(sum)


// we need to add 2 to every argument and then sum everything


// function add(a ,b , c ){
//     return a+b+c
// }

// console.log(add(1 , 2 ,3))


// add(1 ,2,3 ) // 6


// add(1)(2)(3)


//

// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2



// function calculate(operation){
//     return function (a){
//         return function(b){
//             if(operation ==="sum") return a+b
//             else if(operation=='substract') return a-b
//             else if(operation=='multiply') return a*b
//             else if(operation=='divide') return a/b
//             else return 'Invalid Operation'
//         }
//     }
// }


// console.log(calculate('multiply')(1)(2))


// Q3 Infinite Currying

// write an add function which can add values like this

// add(2)(3)(4)(5)(6)(7)(8)...........()


// function add(a){
//     return function(b){
//          if(b) return add(a+b)
//          return a
//     }

// }

// console.log(add(1)(2)(3)(4)(5)())



// Partial Application


function addPartial(a,d){
    return function(b , c){
       return function(f, g ,h){
        return a+b+c+d+f+g+h
       }
    }
}


console.log(addPartial(1 ,2)(3 ,4)(4,5,6))
































// Currying - whenever you create a function pass one arg to it at a time