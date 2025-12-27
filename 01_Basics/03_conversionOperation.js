//let score = "33"

let score = "33abc"
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

//console.log(valueInNumber);

// when other types are converted to number:-
// "33" => 33
// "33abc" => NaN but type is number
// true => 1, false => 0



let isLoggedIn = 55;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


//when other types are converted to boolean :-
// 1 => true; 0=> false
//"" => false
// "anhs" => true

let someNumber = 33
let stringNumber = String(someNumber);

// console.log(stringNumber); 
// console.log(typeof stringNumber); 

const varr = Symbol('123')
// const num = Boolean(varr)
// console.log(num);



// ************************* Operation ****************************

let value = 3;
let negValue = -value;
//console.log(negValue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);//2 raise to the power 3
console.log(2/2);
console.log(22);
*/



let str1 = "hitesh"
let str2 = " world"

let str = str1 + str2;

/*
console.log(str);
-------------do not use conversion like below--------------
console.log("1" + 2);
console.log("1" + 2+2);
console.log(1 + 2 + "2");

console.log(+true);//1
console.log(+"");//0
*/
let num1, num2, num3
 num1 = num2 = num3 = 2+2;//bad way to assign value
//---------------pre and post increment-----------------
let count = 100;
++count;
count++;
// console.log(count);