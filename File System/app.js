const fs = require('fs');

// let  num1 = 3;
// fs.writeFile('example.txt',`the ans is ${num1}\n`,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File successfully created");
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if (err)
//                 console.log(err);
//             else
//                  console.log(file);  
//         });
     
//     }
        

// });

// //rename
// fs.rename('example3.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully renamed the file');    
// });


// fs.appendFile('example2.txt',"apended data to the file",(err)=>{
//     if (err)
//         console.log(err);
//     else
//         console.log("successfully appended data to file");
// });



fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log("succesfully deleted");    
        
})