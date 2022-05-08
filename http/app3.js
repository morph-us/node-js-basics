const http = require('http');
const fs = require('fs');
const readStream = fs.createReadStream('./static/img.jpg');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'img/png'});
    readStream.pipe(res);
    
}).listen(3000);