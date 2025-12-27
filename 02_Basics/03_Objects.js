// singelton
// object.create

//object literals
const mySym = Symbol("key1")
const jsUser = {
    name : "Abhay",
    "full name": "Abhay Upadhayay",
    [mySym]: "mykey1",
    age : 18,
    location :"Delhi",
    email : "abhay@gmail.com",
    isLoggedIn : false,
    lastLoginDays : [ "Monday", "Tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// Object.freeze(jsUser)//locks the key values of an object
jsUser.email = "changed@gmail.com"

// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello JS user");
    
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());




