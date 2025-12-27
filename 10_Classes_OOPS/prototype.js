let muName = "Abhay       "

// console.log(muName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.Abhay  = function(){
    console.log(`Abhay is present in all objects`);
    
}

myHeros.Abhay()

// Inheritance

const user = {
    name: "user"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);