// function printName(name){
//     console.log(name)
// }


// printName('Chandni')



function printFirstName(firstName , cb1 , cb2){
    console.log(firstName) // Adam
    cb1('Smith') // printlastname
    cb2(25) // printAge

}


function printlastName(lastName){
    console.log(lastName)
}


function printAge(age){
    console.log(age)
}


printFirstName('Adam' , printlastName , printAge)



// printlastName('Smith')

// printAge(25)



// Callback Function

