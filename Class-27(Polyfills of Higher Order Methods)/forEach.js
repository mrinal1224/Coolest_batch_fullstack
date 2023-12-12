// write our own forEach

const names = ['Mark' , "Steve" , 'John']
const numbers = [1 ,2 , 3,4]

Array.prototype.myForEach = function(callback){
    for(let i=0 ; i< this.length ; i++){
         callback(this[i])

         // callback -> cb

         // printName('Mark) -> 1st loop
         // printName('Steve') -> 2nd loop
         // printName('John') - 3rd Loop

    }
}


function printName(name){
    console.log(name)
}


names.myForEach(printName)


console.log(Array.prototype)





// We need an array takes a callback fn and loops through the array
// gets the element one by one






