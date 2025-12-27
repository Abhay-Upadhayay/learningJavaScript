const user = {
    username : "Abhay", 
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this // implicitaly returns this not neccesary to write it but its a good practice
}


const userOne = new User("Abhay",12, true)
const userTwo = new User("Upadhayay",11,false)
// "new" keyword creates an empty object which is called instance, A constructor function is called by new keyword which wraps all the arguments and provide us. and then all the data will  go or add in "this".

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);// refference to its own location


