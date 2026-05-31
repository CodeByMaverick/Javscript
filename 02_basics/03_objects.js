//  constructors = singleton    - object.create
// literals = not singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Maverick",
    "full name": "something something",
    [mySym]: "mykey1",         // brackets are used while defining symbol
    age: 20,
    location: "delhi ncr",
    email: "maverick@google.com",
    isLoggedIn: true, 
    lastLoginDays: ["wednesday", "thursday", "saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"])         // used when value can't be accessed by key
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email = "maverick@yahoo.com"
Object.freeze(JsUser)
JsUser.email = "maverick@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());