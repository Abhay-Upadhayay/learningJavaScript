// Array

const myArray = [0,1,2,3]

const newArray = new Array(1,2,3,4,5)

// console.log(newArray[0]);

//Array Methods

// myArray.push(6)
// myArray.pop()
// console.log(myArray);

// myArray.unshift(8)
// myArray.shift();

// console.log(myArray.includes(900));
// console.log(myArray.indexOf(3));


const arr = myArray.join()

console.log(myArray);
console.log(arr);

// Slice , Splice
console.log("A ", myArray);

const myn1 = myArray.slice(1,3);
console.log("B ", myArray);
console.log(myn1);

const myn2 = myArray.splice(1,3);//splice cuts the original array
console.log("C ", myArray);
console.log(myn2);



