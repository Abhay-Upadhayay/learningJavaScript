const user = {
    username : "Abhay",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this); // when we print this in console of browser it will print window object but in node it will print an empty object

// function myFunction(){
//     let username = "Abhay"
//     console.log(this.username);
    
// }
// const myFunction = function(){
//     let username = "Abhay"
//     console.log(this.username);
    
// }
// const myFunction = () => {
//     let username = "Abhay"
//     console.log(this.username);
    
// }

// myFunction()

// const add = (num1, num2) => {
//     return num1 + num2
// }

// const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => (num1 + num2)
const add = (num1, num2) => ({username : "Abhay"})

console.log(add(3,4));
