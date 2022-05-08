const http = require('http');
const fs = require('fs');
const readStream = fs.createReadStream('./static/data.json');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application/json'});
    readStream.pipe(res);
    
}).listen(3000);