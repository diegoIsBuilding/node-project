const fs = require('fs');
// create a readStream that reads stream-buffer.txt 
// createReadStream is the method we will use
// the first arguement take in > where we want to read data from
// it is also where do we want ot pass data from

const readStream = fs.createReadStream('./doc-example/stream-buffer.txt', { encoding: 'utf8'});

// create a writeStream that writes into write-chunk.txt
// by using createWriteStream() 
// takes the argument of a path of a file that needs
// to be written too
const writeStream = fs.createWriteStream('./doc-example/write-chunk.txt')
// the on method is an eventListener 
// readStream.on('data', (package) => {
//     console.log('------The package was recieved------');
//     console.log(package);
//     // \n > this means new line
//     // we are taking the data from one file 
//     // and transfering it to another 
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(package); 
// })

// PIPE EVERYTHING FROM READSTREAM TO WRITE STREAM
readStream.pipe(writeStream);