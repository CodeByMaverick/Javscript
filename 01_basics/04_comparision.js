console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

// Reason is that an equality check == and comparisions < > =< >= work diffrently 
// conversions convert null into a number, treating it as 0 

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);

console.log("2" === 2);

// === is strict check , which also checks equality in values as well as datatypes