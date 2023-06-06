//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printFavFoods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null){
            printFavFoods(obj[key]);
        } else {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

printFavFoods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        return `${this.name} is ${this.age} years old.`
    }

    this.addAge = () => {
        this.age++;
    }
}

let new_person = new Person('Eric', 24)
let new_person2 = new Person('Diana', 35)
console.log(new_person)
console.log(new_person.printInfo())
console.log(new_person2.printInfo())
new_person2.addAge()
new_person2.addAge()
new_person2.addAge()
console.log(new_person2.printInfo())


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const isGreaterTen = (str) => {
    return new Promise( (resolve, reject) => {
        if (str.length > 10){
            resolve(true)
        } else {
            reject(false)
        };
    })
};

isGreaterTen('This string is longer than 10')
isGreaterTen('Not more 10')

.then( (result) => {
    console.log(`Big Word`)
})
.catch( (error) => {
    console.log(`Small Number`)
})

/* 
Kata 1 
In geometry, a cube is a three-dimensional solid object bounded by six square faces, facets or sides, with three meeting at each vertex.
The cube is the only regular hexahedron and is one of the five Platonic solids. 
It has 12 edges, 6 faces and 8 vertices.The cube is also a square parallelepiped, an equilateral cuboid and a right rhombohedron. 
It is a regular square prism in three orientations, and a trigonal trapezohedron in four orientations.

You are given a task of finding a if the provided value is a perfect cube!
*/

function youAreACube (value){
    const cubeNum = Math.cbrt(value) 
    if (Math.floor(cubeNum) === cubeNum) {
      return true
    } else {
      return false
    }
    
  }

/* 
Kata 2 
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/ 

function maps(x){
    return x.map((i) => i * 2)
  }