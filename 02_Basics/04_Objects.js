// const tinderUser = new Object() //singleton

const tinderUser = {}//non singleton

tinderUser.id = "123abc"
tinderUser.name = "Abhay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    name : "Abhay",
    fullname : {
        userfullname : {
            firstname : "Abhay",
            lastname : "Upadhayay"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4:"b"
}

// const obj3 = { obj1 , obj2}
// const obj3 = Object.assign({},obj1, obj2)

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "abhay@gmail.com"
    },
    {

    },
    {

    },
    {

    }
]
/*
console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// it check that an object have that particular property or not
*/
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// const {courseInstructor} = course  // destructuring without changing key name
const {courseInstructor : instructor} = course // destructuring with changing key name

// console.log(courseInstructor);
console.log(instructor);




