const express = require('express');

const server = express();

server.get('/',(req,res)=>{
    res.send("home page")
});

server.get('/about',(req,res)=>{
    // console.log("about page");
    res.send("about  ")
})

server.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is listening at port 4000");
    }
})