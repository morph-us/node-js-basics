const express = require('express');
const app = express();
app.listen(3000);

const people = require('./routes/people');

app.use('/people',people);

app.use((req,res)=>{
    console.log("root middle ware");
});


app.get('/',(req,res)=>{
        res.send('root hit');
});
