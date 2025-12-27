// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month){
    case 1 : 
        console.log("jan");
        break;

    case 2 : 
        console.log("feb");
        break;

    case 3 : 
        console.log("mar");
        break;

    case 4 : 
        console.log("apr");
        break;

    default:
        console.log("default");
        break;
}

//FALSY VALUES

// false , 0 , -0 , BigInt 0n , "" , null , undefiened , NaN

// TRUTHY VALUES

// "0" , 'false' , " " , [] , {} , function(){}
const arr = []

// if (arr.length === 0) {
//     console.log("array is empty");
    
// }

const myObj = {}

// if (Object.keys(myObj).length === 0) {
//     console.log("Object is empty");
    
// }

//NULLISH COALESCING OPERATOR (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 13
// val1 = undefined ?? 15
val1 = null ?? 20 ?? 25


console.log(val1);

// TERNIARY OPERATOR 

// condition ? true : false

const price = 100

price <= 80 ? console.log("less than 80"): console.log("more than 80");

