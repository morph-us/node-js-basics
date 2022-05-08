const fs = require('fs');

fs.rmdir('tutorial',(err)=>{
    if(err)
        console.log(err)
    else
        console.log("succ deleted fol")
})


fs.mkdir('tutorial',(err)=>{
    if (err)
        console.log(err);
    else{
        console.log("dir succ created");
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err)
            else
                console.log("succ deleted fol")
        })

    }
        
})