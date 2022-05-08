const http = require('http');
const fs = require('fs');
const readStream = fs.createReadStream('./static/index.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    readStream.pipe(res);
    
}).listen(3000);