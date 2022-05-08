
const fs = require('fs');


// const writeStream = fs.createWriteStream('./largefile.txt' );
// data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// for (let i = 0; i < 100000000; i++) {
//     writeStream.write(data);
//     console.log(i);
// }


// fs.readFile('./bigfile',(err,file)=>{
//     if (err)
//         console.log(err);
//     else
//         console.log(file);

// })


const readStream = fs.createReadStream('./bigfile','utf8');
readStream.on('data',(chunk)=>{
    console.log(chunk);
})

