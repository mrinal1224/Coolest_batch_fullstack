//Syntax of Promise

let myPromise = new Promise(function(resolve , reject){
    const a = 5
    const b = 4

    if(a==b){
        resolve('Yes they are Eqaul') // fulfilled
    }

    else{
        reject('No They are not Equal') // rejected
    }
})

// then and catch

myPromise.then(function(result){
   console.log(result)
}) // fulfilled and settled


myPromise.catch(function(err){
    console.log(err)
}) // rejected and Settled



