const express = require('express');
const bodyparser = require('body-parser');
const { nextTick } = require('process');
const app = express();
app.listen(3000);

app.use(bodyparser.json());

app.use('/example',(req,res,next)=>{
    console.log(req.url,req.method);
    console.log('example middleware');
    req.banana = "example";
    next();

});


app.use((req,res,next)=>{
    console.log(req.url,req.method);
    req.banana = "banana";
  
    next();

});

app.get('/',(req,res)=>{
    console.log(req.banana);
    console.log('server');

    res.send('middleware');

});

app.get('/example',(req,res)=>{
    console.log(req.banana);
    console.log('server example');

    res.send('middleware');

});
