/* on the basis of how data is stored in memory and 
 how it is accessed, data is categorised in two types only.
 */


// primitive 

// 7 types : string, Number, Boolean, Null, Symbol, bigInt, undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
const bigInt = 54984588962494646n

//Reference (non primitive)

//Array, Object, Functions

const arr = ["abhay" , "vikas"];

let myObj = {
    name : "Abhay",
    age : 20
}

function myFunction () {
    console.log("Hello World")
}
myFunction()
console.log(typeof bigInt);
//https://262.ecma-international.org/5.1/#sec-11.4.3


//**********************************************************

// Stack Memory(Primitive) , Heap Memory(non-primitive)

let myYoutubename = "abhay"

let anotherName = myYoutubename
anotherName = "Shadowking"

console.log(myYoutubename)

let userOne ={
    email: "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhay@gmail.com"

console.log(userOne.email)
