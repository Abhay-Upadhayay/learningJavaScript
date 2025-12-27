// Immediatly Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})(); //always end with a semicolon to make sure where it terminates

((name) => {
    console.log(`SDB TWO CONNECTED`);
    
})(`Abhay`) //Arguments can be passed here
