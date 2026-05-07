const accountId = 15443
let acccountEmail = "Maverick@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

acccountEmail = "mav@mav.com"
accountPassword = "414141"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var 
because of the issue in block scope and functional scope
*/

 console.table([accountId, acccountEmail, accountPassword, accountCity, accountState])