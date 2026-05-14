const name = "Maverick"
const repoCount = 2

console.log(name + repoCount + " Value"); 
// outdated syntax; not recomended 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('userOne')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(3, 6)
console.log(newString);