const express = require('express');

const router = express.Router();

router.post('/register',(req,res)=>{

    const {username , email , password} = req.body
    console.log(username);
    console.log(email);
    console.log(password);
    
    
    
    res.status(201).json({message : "user registered successfully..."})
})


router.get('/:userId',(req,res)=>{
    const {userId} = req.params
    console.log(userId);
    res.status(201).json({message : "user found"})
    
})


module.exports = router;