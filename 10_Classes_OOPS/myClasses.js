// ES6

class user{
    constructor(username, email, password){
        this.email = email;
        this.username= username;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new user("Abhay","abhay@gmaol.com",1323);

console.log(chai.encryptPassword());

