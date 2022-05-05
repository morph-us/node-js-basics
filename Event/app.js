const EventEmitter = require('events');
const eventEmmiter = new EventEmitter();

eventEmmiter.on('sumListener',(num1,num2)=>{
    console.log("sum of "+ num1 + " and " + num2+ " is " + (num1+num2));
})
eventEmmiter.on('tutorial',()=>{
    console.log("tutorial event occured");
})


eventEmmiter.emit('tutorial');
eventEmmiter.emit('sumListener',5,6);


