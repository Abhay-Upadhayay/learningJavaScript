// LOOP ON OBJECTS
const myObj = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const arr = [1,2,3,5,4]

for (const key in arr) {
    console.log(arr[key]);
    
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")
// CAN NOT ITERATE MAP USING FORIN
for (const key in map) {
    console.log(key);
    
}
