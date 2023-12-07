//Syntax of Promise

let myPromise = new Promise(function(resolve , reject){
    const a = 5
    const b = 3

    if(a==b){
        resolve('Yes they are Eqaul')
    }

    else{
        reject('No They are not Equal')
    }
})


console.log(myPromise)