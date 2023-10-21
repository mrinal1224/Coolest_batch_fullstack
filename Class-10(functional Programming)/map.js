


// get Squares for all the array elements
// function calculateSqaure(arr){

//     let sqaureArr = []

//     for(let i=0 ; i<arr.length ; i++){
//         sqaureArr.push(arr[i]*arr[i])
//     }

//     return sqaureArr
// }

// let result = calculateSqaure(numbersArray)

// console.log(result)

// map

let numbersArray = [2 , 3, 4 , 5 , 6]

function sqaure(num){
    return num*num // [4 , 9 , 16 , 25 , 36 ]
  }
let resultfromMap = numbersArray.map(sqaure)

console.log(resultfromMap)

// I have Bank Transactions and you have to convert this from usd to inr
const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 80;


let conversions = transactions.map(function(amount){
    return amount * 80
})

console.log(conversions)














