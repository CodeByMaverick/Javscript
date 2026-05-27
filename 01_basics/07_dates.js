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


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(` ${newDate.getFullYear()} and the time is 5:20pm `)

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));