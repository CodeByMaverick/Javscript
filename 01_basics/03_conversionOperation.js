let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false=> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false; "something" => true

let someNumber = 44
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); 


// ****************************************** Operations ******************************************

let value = 3 
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello"
let str2 = " Mate"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// if string first then every element should be treated like a string
// but if string is last then first conversion will happen 

console.log( (2 + 5) * 4 % 8);

// good for problem solving but in irl write simple understanable code don't make it complex (use parenthesis)

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 

// readability is top priority 

let gameCounter = 100
++gameCounter;
console.log(gameCounter);