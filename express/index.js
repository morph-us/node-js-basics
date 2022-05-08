const express = require('express');
const app = express();
app.listen(3000);

app.get('/',(req,res)=>{
    res.send('Hello world using express');
});

app.get('/hello',(req,res)=>{
    res.send('Hello world');
});

app.get('/example/:name/:age',(req,res)=>{
    //console.log(req);
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : "+ req.params.age);
})


