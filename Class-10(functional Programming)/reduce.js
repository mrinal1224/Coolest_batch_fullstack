let numbersArr = [1 , 2, 3, 4 ,5]


// Calculate the sum of alll the array elements

function sumAll(arr){
    let sum = 0

    for(let i=0 ; i<arr.length ; i++){
        sum = sum+arr[i] 
    }
   return sum
}

let total = sumAll(numbersArr)
console.log(total)



let sumFromReduce = numbersArr.reduce(function(acc , num){
       acc = acc+num 
       return acc
}, 0)

// let productFromReduce = numbersArr.reduce(function(acc , num){
//     acc = acc*num 
//     return acc
// }, 1)


console.log(sumFromReduce)
// console.log(productFromReduce)



