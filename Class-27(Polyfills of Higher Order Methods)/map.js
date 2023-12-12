// let arr = [1 , 2, 3, 4]

// let sqauredNum = arr.map(function(num){
//     return num*num
// })

// console.log(sqauredNum)


// Write the Polyfill for Map


// loop , array , resultantArray , callback


Array.prototype.myMap = function(callback){
    let resultantArray = []

    for(let i=0 ; i<this.length ; i++){
            resultantArray.push(callback(this[i]))
         }
        

    // 1st loop - 1 - sqaure(1) -> 1
    // 2ndLoop -> 2 - square(2) -> 4
    // 3rdLoop -> 3 - sqaure(3) -> 9

    return resultantArray
}

let numbers = [1 , 2, 3 , 'Mark' , 4]

function sqaure(num){
 return num*num
}

let finalArray = numbers.myMap(sqaure)

console.log(finalArray)





