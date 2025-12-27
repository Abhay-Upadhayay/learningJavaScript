// let math = require("./math");

// console.log(math.sum(3,5));

// console.log("Abhay");

const fs = require('fs');

fs.appendFile('abs.txt',"Hello World",(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("file created successfully");
        
    }
})