const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval;
    
// },0) // can paas any number to initializer

const myTotal = myNums.reduce((acc , currval) => (acc + currval),0)

console.log(myTotal);


const shoppingCart = [
    {
        course : "js",
        price : 2999
    },
    {
        course : "java",
        price : 999
    },
    {
        course : "mobile dev",
        price : 5999
    },
    {
        course : "data science",
        price : 12999
    },
]

const total =  shoppingCart.reduce( (acc,item) => (acc + item.price),0)
console.log(total);
