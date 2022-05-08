const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("hello from root domain");
        res.end();
    }
    else{
        res.write("hello from other domain");
        res.end();
    }
    
});
server.listen(4000);

