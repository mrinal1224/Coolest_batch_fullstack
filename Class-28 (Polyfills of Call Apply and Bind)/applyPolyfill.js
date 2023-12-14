let car = {
    name: "Mercedes",
    color: "White",
  };
  
  function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} of ${price} `);
  }


  // //   Apply Polyfill


Function.prototype.myApply = function (context = {}, args=[]) {

    if(typeof this !== 'function'){
        throw new Error (this + 'Is not callable')
      }

    if(!Array.isArray(args)){
        throw new Error (this + 'We neede an array for args')
    }
  
     
    context.fn = this; // buyCar
  
    context.fn(...args);
  };


  buyCar.myApply(car, [3000000]);
