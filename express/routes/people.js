const express = require('express');

const route = express.Router();

route.use((req,res)=>{
    console.log(" people middle ware used");
});

route.get('/',(req,res)=>{
    res.send('/ being hit');
});

route.get('/example',(req,res)=>{
    res.send('/example being hit');
});


module.exports = route;