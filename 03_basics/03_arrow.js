const user = {
    username: "person1",
    price: 2000,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the website`);
    }
}

user.welcomeMessage()
user.username = "james"
user.welcomeMessage()

console.log(this);