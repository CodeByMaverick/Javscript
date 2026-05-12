// JS is a dynamically typed language
// it means variables don't need explicit type declerations , and the type can be changed at runtime


// # Primitive

// 7 Types - String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;
// let userEmail = undefined
// both are same ; value will be undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2217832398749234n



// Refrence (non-primitive)

// Array, Objects, Functions

const heros = ["ironman", "spiderman", "thor"]; // array

let myObj = {
    name : "Maverick",
    age : 19,
}                       // object
