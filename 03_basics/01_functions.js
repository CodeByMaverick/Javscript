function sayMyName(){
console.log("M");
console.log("A");
console.log("V");
console.log("E");
console.log("R");
console.log("I");
console.log("C");
console.log("K");
}
sayMyName()

function addTwoNumbers(number1, number2){       // parameters
    console.log(number1 + number2);
}
addTwoNumbers(3, 7)                           // arguments
addTwoNumbers(3, "7")
addTwoNumbers(3, "s")
addTwoNumbers(3, null)

function addnumbers(number1, number2){
    let result = number1 + number2
    return result
    console.log(Something)            // function rule - do nothing after return
    return number1 + number2         // short method
}
let result = addnumbers(4, 9)
console.log("Result:", result);


function userLoginMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(userLoginMessage("Maverick"));

// another case

function userLoginMessage2(username = "james"){       // If it has a default value then if() will not execute
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(userLoginMessage2());                     // but if a value in entered here so it will override



function calculateCartPrice(val1, val2, ...num1){                // spread operator
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 600 , 800));

const user = {
    username: "john",
    price: 499
}

function totalBill(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
totalBill(user)

totalBill({
    username: "sam",
    price: 599
})

const myArray = [299, 399, 499, 599]
function getSecondValue(getArray){
    return getArray[2]
}
console.log(getSecondValue(myArray))

console.log(getSecondValue([100, 200, 300, 400]));