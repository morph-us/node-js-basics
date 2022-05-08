const fs = require('fs')


var text = "";
for(let i=0;i<100;i++){
    text = text + "This is beginning \n";

}

fs.writeFile('example.txt',text,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File successfully created");
        
    }});


    const readStream = fs.createReadStream('./example.txt');
    const writeStream = fs.createWriteStream('example2.txt');
    readStream.pipe(writeStream)    
        

