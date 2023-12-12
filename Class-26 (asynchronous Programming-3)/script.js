// What is this async Keyword


// async function greeting(){

//    return 'Hello' // 1st case

// }

// let message = greeting()


// message.then((res)=> console.log(res))


// console.log(message)



// New Promise


let newPromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved successfully')
    } , 40000)
})

let newPromise2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise 2 Resolved Successfully')
    } , 60000)
})


function executePromise(){
    newPromise.then((res)=>console.log(res))

    console.log('Scaler is Awesome!!')
}


//Scaler is Awesome
//Promise resolved messaseg after 4 secs



async function  executePromiseAsync(){

     console.log('Hello')


     const val1 = await newPromise // suspended
     console.log(val1) // 8

     const val2 = await newPromise2
     console.log(val2) // 12

    //  both after 6 secs


     console.log('Scaler is Awesome from Async Function')
}










//  executePromise() // output



 executePromiseAsync()








