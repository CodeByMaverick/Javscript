// Immediately Invoked Function Expression (IIFE)

(function one(){
    console.log(`DB CONNECTED`);             // named iife
})();

// semicolon ; is always necessary to separate two iife

// iife is used to remove pollution from global scope

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("john")
