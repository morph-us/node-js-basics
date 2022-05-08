const fs = require('fs');

fs.rmdir('example',(err)=>{
    if(err)
        console.log(err)
    else
        console.log("succ deleted file & folder")
            

})

fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else{
        console.log(files);
        for(let file of files){
            fs.unlink(`./example/${file}`,(err)=>{
                if(err)
                    console.log(err);
                else
                    console.log("succesfully deleted "+ file+'\n');
            })
        }
    }
})