// Dates 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2026, 0, 15)
// let myCreatedDate = new Date(2026, 0, 15, 8, 5)
// let myCreatedDate = new Date("2026-01-15")
let myCreatedDate = new Date("01-15-2026")
console.log(myCreatedDate.toLocaleString());