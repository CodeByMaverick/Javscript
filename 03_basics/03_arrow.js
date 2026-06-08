const user = {
    username: "person1",
    price: 2000,

    welcomeMessage : function() {
        // console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}

user.welcomeMessage()
user.username = "james"
user.welcomeMessage()

console.log(this);

// inside browser , global object is window object 

function fn(){
    const username = "someone"
    console.log(this.username);
}

fn()

const fn2 = () => {
    const username = "someone"
    console.log(this.username);
}

fn2()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4, 6));


// const add2 = (num1, num2) => num1 + num2        -  implicit return

// const add2 = (num1, num2) => (num1 + num2)      

const add2 = (num1, num2) => ({username: "personA"})

console.log(add2(7, 7));

// if use {} then return should be present , else no need 

