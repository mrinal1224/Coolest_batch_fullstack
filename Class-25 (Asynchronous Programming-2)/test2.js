let myPromise = new Promise((resolve, reject)=>{
    let a = 8
    let b = 5

    if(a==b){
        resolve('yes they are equal')
    }else{
        reject('no they are not equal')
    }

})

let newPromise = new Promise((resolve, reject)=>{
    let arr = [2,4,6];
    if(arr.length == 3){
        resolve(arr.length)
    }else{
        reject('not resolved')
    }
})

console.log(newPromise);
