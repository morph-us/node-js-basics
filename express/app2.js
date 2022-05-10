const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser')
app.listen(3000);

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());




app.get('/',(req,res)=>{
    //res.send('Hello World');
    res.sendFile(path.join(__dirname,'static','login.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    console.log(req.body['email']);

    //res.send('successfully posted data');
    res.json({success:true});
    
})

