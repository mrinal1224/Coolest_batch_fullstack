// const numbers = [2 , 5 , 100 , 4]

// numbers.forEach((num)=>{
//     console.log(num + ' '+ String(num).charCodeAt(0))
// })

// const sortedNumbers = numbers.sort()

// console.log(sortedNumbers)


// const alphabets = ['b' , 'a' , 'P' , 'd']

// alphabets.forEach((alphabet)=>{
//     console.log(alphabet + ' '+ alphabet.charCodeAt(0))
// })




// const sortedAlphabets = alphabets.sort()

// console.log(sortedAlphabets)


// Comparator Callback


const numbers = [2 , 4 , 5 , 100]

numbers.forEach((num)=>{
    console.log(num + ' '+ String(num).charCodeAt(0))
})

const sortedNumbers = numbers.sort((a,b)=>{

    console.log('a-> ' , a +' b->' ,b)
    return b-a
})

console.log(sortedNumbers)


