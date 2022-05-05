const EventEmitter = require("events");

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let obj1 = new Person("Harshal");
let obj2 = new Person("Abhishek");

obj1.on('name',()=>{
    console.log("my name is "+ obj1.name);
})

obj2.on('name',()=>{
    console.log("my name is "+ obj2.name);
})

obj1.emit('name');
obj2.emit('name');
