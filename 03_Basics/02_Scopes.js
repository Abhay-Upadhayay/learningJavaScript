// var c = 30
let a = 300
if (true){
    let a = 10
    const b = 20
    console.log("INNER :",a);
    
}

console.log(a);
// console.log(b);
// console.log(c);

// scope in console is different then scope in node

function one(){
    const username = "Abhay"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    two();
}

one();

console.log(addone(5));


function addone(num){
    return num+1
}

//consol.log(addTwo(5))            //this willb generate an error because function is holded in a variable and function and function called before variable declaration
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))
