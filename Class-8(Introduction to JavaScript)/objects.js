// Create an object you will use curly braces


// let person1 = {
//     name : 'Adam',
//     age : 26,
//     OwnsACar : false,
//     carName : null

// }

// let person2 = {
//     name : 'Mark',
//     age : 30,
//     OwnsACar : true,
//     carName : 'Audi',
//     phoneNo : 126983629
// }

// console.log(person1)
// console.log(person2)




let captainAmerica = {
    name :'Steve Rogers',
    age : 102,

    friends : ['Tony Stark' , 'Bucky Barnes' , 'Bruce Banner'],

    address : {
        country : 'USA',
        city : {
            name : 'Brooklyn',
            pincode : 123456
        },
    },

    isAvenger : true
}

//Access key and values of an Object
// dot notation
console.log(captainAmerica.age)

//bracket notation

console.log(captainAmerica['name'])


console.log(captainAmerica.address.city.name)


captainAmerica.movies = ['End Game' , 'Civil War' , 'Winter Soldier']



delete captainAmerica.age 

console.log(captainAmerica)


console.log(captainAmerica.friends[1])

captainAmerica.isAvenger = false

console.log(captainAmerica)



















