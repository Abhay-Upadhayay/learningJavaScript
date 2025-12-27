const accountId = 12424
let accountEmail = "hitesh@gmail.com"
var accountPassword = "124510"
accountCity = "jaipur"
/*
always declare a varible with a type 
*/
let accountState;
/*
when a varible is declared but not assigned any value then it is considered as undefined
*/
//account = 2 // not allowed
accountEmail = "av@gmail.com"
accountPassword = "559445"
accountCity = "Delhi"
console.table([accountEmail,accountId,accountPassword,accountCity])
/*
console.table([]) it is used to print multiple variables at once in a tabular form
*/

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

