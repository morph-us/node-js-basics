const fs = require('fs');
let  num1 = 3;
fs.writeFile('example.txt',`the ans is ${num1}\n`,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File successfully created");
     
    }
        

});