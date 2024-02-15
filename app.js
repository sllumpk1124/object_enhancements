// In this exercise, you’ll refactor some ES5 code into ES2015. 
// Write your code in the sections with a comment to “Write an ES2015 Version”.

//SAME KEYS AND VALUES
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

//COMPUTED PROPERTY NAMES
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "This is my favorite!"
}

// OBJECT METHODS
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

let instructors = {
    firstName: "Colt",
    sayHi(){
    return "Hi!";
},
sayBye(){
    return this.firstName + " says bye!"
}
}

// createAnimal Function
// Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.

function animal(species, verb, noise){
    return{
        species,
        [verb](){
       return noise;
    }
}
}