
// polyfill of Reduce

// callback , acc , initialValue

Array.prototype.myReduce = function(cb , initialValue){

   let accumulator = initialValue


   // accumulator = 0
   //accumulator = 1
   // Accumulatpr = 3
    // Accumulatpr = 6
    // Accumulator = 10

   for(let i=0 ; i<this.length ; i++){
    accumulator = cb(accumulator , this[i])
   }

   // first loop - calculateSum(0 , 1)
   // Second Loop - calculateSum(1 , 2 )
     // Third Loop - calculateSum(3 , 3 )
     // FourthLoop - calculateSum(6 , 4)

   return accumulator

}



let arr2 = [1 , 2, 3 , 4]

function calculateSum (accumulator , currentValue){
    return accumulator + currentValue 
    
    // 0+1 = 1 , 
    // 1+2 = 3 
    // 3+3 = 6
    // 6+4 = 10
}


let sum = arr2.myReduce(calculateSum , 0)


console.log(sum)


