const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
readStream.on('data',(chunk)=>{
    //console.log(chunk);
    writeStream.write(chunk);

})

const writeStream = fs.createWriteStream('example2.txt' );