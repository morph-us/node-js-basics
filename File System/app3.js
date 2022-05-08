const fs = require('fs');


// fs.mkdir('tutorial',(err)=>{
//     if (err)
//         console.log(err);
//     else{
//         console.log("dir succ created");
//         fs.writeFile('./tutorial/example.txt','1234',(err)=>{
//             if(err)
//                 console.log(err)
//             else
//                 console.log("succ created file in folder")
//         })

//     }
        
// })



fs.unlink('./tutorial/example.txt',(err)=>{
    if(err)
    console.log(err)
else{
    fs.rmdir('tutorial',(err)=>{
        if(err)
            console.log(err)
        else
            console.log("succ deleted file & folder")
                
    
    })
}

     
})
