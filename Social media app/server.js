const app = require('./src/app');

app.listen(8080,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('server is listening at port number 8080');
    }
})