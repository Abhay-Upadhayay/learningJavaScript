// Functions

function sayMyName() {
    console.log("Abhay");
    
}

// sayMyName()

// function addTwonumbers(num1,num2){
//     console.log(num1+num2);
    
// }

function addTwonumbers(num1,num2){
    let res = num1 + num2;
    return res;
}

const result = addTwonumbers(3,5);
// console.log(result);

function loginUserMessage(username = "Abhay"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhay"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "Abhay",
    price : 199
}

function handleObjects(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObjects(user)
handleObjects({
    username : "Sam",
    price : 399
})

const myArray = [100,200,300,400]

function getSecondValue(getArray){
    return getArray[1]
}

// console.log(getSecondValue(myArray));
console.log(getSecondValue([100,200,300,400]));

