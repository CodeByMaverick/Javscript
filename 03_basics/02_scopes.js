if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);             //  block scope value shouldn't go outside - so var is not preferred to use


let a = 500
if(true){                                 // inside if - block scope 
    let a = 10                           // outside it global scope
    const b = 20
    // console.log("Inner:",a);
}
// console.log(a);

// global scope inside browser console & global scope inside code space run through node - are different



function one(){
    const username = "someone"
    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(webiste);

    two()
}

one()

if(true){
    const username = "person1"
    if(username === "person1"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++ interesting +++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1
}

// console.log(addTwo(5));           // can't access before funtcion cause it is held by a variable
const addTwo = function(num){          // also called expression
    return num + 2
}
