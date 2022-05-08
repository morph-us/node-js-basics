const fs = require('fs');
const zlib = require('zlib');

const gzib = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt');
const writeStream = fs.createWriteStream('compressed.txt.gz');
readStream.pipe(gzib).pipe(writeStream);

