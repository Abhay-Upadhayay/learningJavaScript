// const coding = [ "js" , "ruby" , "java" ,"python","cpp"]
// FOR EACH DOES NOT RETURN ANY VALUES DOESN'T MATTER YOU WANT IT TO RETURN OR NOT 
// const values = coding.forEach( (item)=> {
//     // console.log(item);
//     return item;
// });

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// so to overcome foreach we use filters

// const newnums = myNums.filter((num) => num > 4)    // you need to write return keyword when you are using {}
// const newnums = myNums.filter((num) => {
//     return num > 4;
// })

const newnums = []

myNums.filter( (num) => {
    if (num > 4) {
        newnums.push(num);
    }
})

console.log(newnums);




