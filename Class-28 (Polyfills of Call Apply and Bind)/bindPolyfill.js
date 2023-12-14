// let car = {
//     name: "Mercedes",
//     color: "White",
//   };
  
//   function buyCar(price) {
//     console.log(`I bought a ${this.color} ${this.name} of ${price} `);
//   }

 
 // return a function 

//Bind Polyfill


//  Function.prototype.myBind = function(context={}, ...args){
//     if(typeof this !== 'function'){
//         throw new Error (this + 'Is not callable')
//       }

//       context.fn = this // fn : buyCar

//       return function(...args2){
//         return context.fn(...args , ...args2)
//       }

  
//  }




// 2nd Implementation of Bind Polyfill



let car = {
    name: "Mercedes",
    color: "White",
  };
  
  function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} of ${price} `);
  }


  Function.prototype.myBind2 = function(...args){
    let fn = this // buyCar

    let params = args.slice(1)

    return function(...args2){
        fn.apply(args[0] , [...params , ...args2] )
    }
  }




 let bindedFn = buyCar.myBind2(car , '3000000')
 bindedFn()
