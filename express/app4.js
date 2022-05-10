const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser')
const Joi = require('joi');
app.listen(3000);

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());




app.get('/',(req,res)=>{
    //res.send('Hello World');
    res.sendFile(path.join(__dirname,'static','login2.html'));
});

app.post('/',(req,res)=>{

    console.log(req.body);
    //  console.log(req.body['email']);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()    
    });app.use(bodyparser.urlencoded({extended:false}));
    app.use(bodyparser.json());
    
   
    
    const {error,value} =  schema.validate(req.body); 
    
    if(error){
        console.log(error.message);
        //console.log(value.details[0].message);
        res.send("an error occured: " + error.message);
   
    }
    else{
        res.send("successfully posted data")


    }
    //console.log(value);
    

    // schema.validateAsync(req.body,(err,result)=>{
        
    //     if(err){
    //         res.send("an error occures");
    //     }
    //     console.log(result);
    //  //   res.send("successfully posted data");
    //     res.json({success:true});


    // });
    
    // Joi.validate(req.body,schema,(err,result)=>{
    //     if(err){
    //         res.send("an error occures");
    //     }
    //     console.log(result);
    //     res.send("successfully posted data")
    // })

  
})

