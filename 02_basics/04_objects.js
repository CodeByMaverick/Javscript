// const hingeUser = new Object()   -   object constructor (singleton object)

const hingeUser = {}

hingeUser.name = "james" 
hingeUser.age = 22
hingeUser.isLoggedIn = true

// console.log(hingeUser);

const user = {
    email: "user@gmail.com",
    fullname: {
        userfullname:{
            firstname: "userfirstname",
            lastname: "userlastname"
        }
    }
}
// console.log(user.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}
const obj3 = {7:"g", 8:"h", 9:"i"}

// const objF = {obj1, obj2, obj3}
// const objF = Object.assign({}, obj1, obj2, obj3)   // while assigning should put empty curly braces, {} is target, rest is source

const objF = {...obj1, ...obj2, ...obj3}         // most usable is spread
// console.log(objF);


const users = [
    {
        id: 111,
        email: "a@gmail.com"
    },
    {
        id: 222,
        email: "b@gmail.com"
    },
    {
        id: 333,
        email: "c@gmail.com"
    },
]
console.log(users[2].id);

console.log(hingeUser);

console.log(Object.keys(hingeUser));
console.log(Object.values(hingeUser));
console.log(Object.entries(hingeUser));

console.log(hingeUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "Javascript",
    coursePrice: 3000,
    courseTutor: "someone"
}

// console.log(course.courseTutor);

const {courseTutor: Tutor} = course
console.log(Tutor);

// {
//     "name": "maverick",
//     "course": "Javascript"       ------ JSON format , API
//     "duration": "3 months"
// }

[
    {},
    {},
    {}
]