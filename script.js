console.log('Hello World Alleluia !');
console.info('Hello World INFO !');
console.error('Hello World ERROR !');
console.warn('Hello World WARN !');

// This is a comment

/* This comment
is on multiple lines */ 

/**
* This comment
* is used for
* documentation
*/

let x = 12.2;
console.log(Math.ceil(x)); // 13 (arrondit à l'entier au dessus)
console.log(Math.round(x)); // 12 (arrondit à l'entier le plus proche)
console.log(Math.floor(x)); // 12 (arrondit à l'entier en dessous)

// var userAge = 30;
// var fruits = ['apple', 'banana', 'kiwi'];
// var userCar = {
//   model: "BMW", 
//   year: "2000"
// }
// var sayMyName = function() {
//     console.log("My name is Bob!")
// }

// var myName = "Fehizoro";
// console.log(myName);
// myName = "Paulo";
// console.log(myName);

//// Faute de frappe dans un nom de variable
// Avec 'use strict'
'use strict';
let myVar = 'test';
myvar = 2;
// Uncaught ReferenceError: myvar is not defined

//CHALLENGE 1
let admin = "Zorro";
let nameOf = "Ariane";
nameOf = "John";
admin = nameOf;
console.log(admin );

//CHALLENGE 2
let a = 1, b = 1;
let c = ++a; 
let d = b++; 

console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
console.log(d); // 1

console.log(typeof 1);

const userName = prompt("What's your name?");
console.log(userName);

const age = prompt("How old are you?");
console.log(typeof(age));
// String

const ageNumber = parseInt(age);
console.log(typeof(ageNumber));
// Number


let message = 'bonjour';
let jourIndex = message.indexOf('jour');
console.log(jourIndex);