const Joi = require('joi');
const schema = Joi.object().keys({
    email : Joi.string().trim().email().required(),
    password : Joi.string().min(5).max(10).required()    
});

const data = {email:'harshal@gmail.com',password:'12345678'};

const {error,value} = schema.validate(data);

if(value){
    console.log(value);
   // console.log(error.message);
    console.log("error");
}
else{
    console.log("no error");
}