let car = {
    name: "Mercedes",
    color: "White",
  };
  
  function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} of ${price} `);
  }


Function.prototype.myCall = function (context = {}, ...args) {
    //   console.log(this)

    if(typeof this !== 'function'){
        throw new Error (this + 'Is not callable')
      }
  
    // context -> car

    
  
    context.fn = this; // buyCar
  
    context.fn(...args);
  };
  
  buyCar.myCall(car, "3000000");









// let obj = {name :"Tim"}

// let arr = [1 , 2, 3 ,4 ]

// let ans = Array.isArray(arr)

// console.log(ans)





