// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman", "hulk", "thor", "spiderman"]

const myArray2 = new Array(1, 2, 3, 4)

console.log(myArray[0]);
console.log(myHeros[2]);


// Array Methods

myArray.push(7)
myArray.push(9)
myArray.pop()
myArray.unshift(9)
myArray.shift()

console.log(myArray);

console.log(myArray.includes(5));
console.log(myArray.indexOf(4));

const newArray = myArray.join()

console.log(myArray);
console.log(newArray);

console.log(typeof newArray);

// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)     // splice manipulates original array (takes out the elements)
console.log("C ", myArray);
console.log(myn2);