const express = require('express');
const path = require('path');
const app = express();
app.listen(3000);

app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    //res.send('Hello World');
    res.sendFile(path.join(__dirname,'static','index.html'));
});
