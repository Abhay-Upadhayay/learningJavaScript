const promiseOne = new Promise(function (resolve, reject){
    //do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
} )

promiseOne.then(()=>{
    console.log('promise is consumed');
    
})

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('Async task 2')
        resolve();
    },1000);
}).then(function(){
    console.log('Promise 2 is consumed');
    
});


const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log('Async task 3');
        resolve({username: "Abhay", email: "example.@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log('Promise 3 is consumed');
    console.log(user.username);
    
})





const promiseFour = new Promise(function (resolve,reject) {
    let err = true
    setTimeout(function(){
         if(err!=true ){
            console.log('Async task 4');
            resolve({username: "Abhay Upadhyay", email: "example.@gmail.com"})
         }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user.username);
    
}).catch(function (err) {
    console.log(err);
}).finally(function(){
    console.log("Promise is either resolved or rejected");
    
})
  

const promiseFive = new Promise(function (resolve,reject) {
    let err = true
    setTimeout(function(){
         if(err!=true ){
            console.log('Async task 4');
            resolve({username: "Javascript", email: "example.@gmail.com"})
         }else{
            reject('ERROR: Something in JS went wrong')
        }
    },1000)
})

async function consumrPromiseFive() {
    try {
        const res = await promiseFive
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumrPromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// };

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})

