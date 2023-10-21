// 
let NumbersArr = [2 , 4 , 7 , 8 , 10 , 11 , 13 , 14]

// function getEven(arr){
//    let evenNumbers = []
//   for(let i=0 ; i<arr.length ; i++){
//       if(arr[i]%2==0){
//         evenNumbers.push(arr[i])
//       }
//    }

//    return evenNumbers
// }

// let resultEvenArray = getEven(NumbersArr)

// console.log(resultEvenArray)


// Filter


let evenArray = NumbersArr.filter(function(num){
    return num%2==0 // true // false
})

console.log(evenArray)


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


let positiveAmount = transactions.filter(function(amount){
    return amount>0
})

console.log(positiveAmount)






