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
    console.log("Inner:",a);
}
console.log(a);

// global scope inside browser console & global scope inside code space run through node - are different