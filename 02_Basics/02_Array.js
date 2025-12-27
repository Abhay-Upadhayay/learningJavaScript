const marvel_heroes =  ["Thor", "IronMan","SpiderMan"]
const dc_heroes = ["SuperMan","Flah","BatMan"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes, "Abhay"]
console.log(all_new_heroes);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(arr1[5][2][0]);

const simple_arr1 = arr1.flat(Infinity)
console.log(simple_arr1);


console.log(Array.isArray([]));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "Abhay"}));//interesting

let score1=100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


