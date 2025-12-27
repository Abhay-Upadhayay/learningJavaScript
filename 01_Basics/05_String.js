// String

const name = "Abhay"
const repCount = 50

//console.log(name + repCount + " value");// not a good way to concatenate strings

console.log(`Hello my name is ${name} and my repo is ${repCount}`);

const gameName = new String('Abhay-yt')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

const newString = gameName.substring(0,4);

console.log(newString);

const newStringOne = "     Abhay    "

console.log(newString)
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));


console.log(url.includes('hitesh'))

console.log(gameName.split('-'));

