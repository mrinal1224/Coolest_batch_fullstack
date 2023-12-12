// let arr = [1 , 2, 3, 4, ,5 ,6 , 7]

// let resultArray = arr.filter(function(num){
//     return num%2==0
// })

// console.log(resultArray)

// PolyFill for Filter Method

// Starting at 10:37

Array.prototype.myFilter = function (callback) {
  let resultArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resultArray.push(this[i]);
    }
  }

  return resultArray;

  // 1stloop -> isEven(1) -> false
  // 2ndloop -> isEven(2) -> true
};

let arr2 = [1, 2, 3, 4, 5, 6, 7];

function isEven(num) {
  return num % 2 == 0;
}

function isOdd(num) {
  return num % 2 != 0;
}

let ansArray = arr2.myFilter(isOdd);

console.log(ansArray);
