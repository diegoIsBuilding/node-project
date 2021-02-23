// import core module which is the fs module 
// The fs module enables interacting with the 
// file system in a way modeled on standard POSIX functions.
const fs = require('fs');
// read files

// the read files method needs to be passed in the directory file path
// the second argument willbe a callback function that takes in an error and data

// while our computer is running the readFile method it will process it
// somewhat in the background. while that process is happening our computer will
// continue to go down the file and console log the last file
// this is because this is an asyncronous callback function 

fs.readFile('./doc-example/script.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // this returned a buffer
        // <Buffer 68 65 6c ...>
        // this is just a package of data being sent to us
        // when we read this file

        // we  will use the .toString method to display the file data
        console.log(data.toString());
    }
})
console.log("althoug this is the last line, it will appear first when the file is run")

// writing files
// we will be using the writeFile() method 
// it will take in the path to the file 
// you want to write on
// the next argument is the data you want to write onto
// the file
// the third arguement is a callback function becasue the writeFile method is aysnchronous 
// 
fs.writeFile('./doc-example/script.txt', 'the file was overwritten', () => {
    console.log('the file have been overwritten');
});
// directories
// the fs module has a special method called mkdir
// mkdir stands for make directory 
// we have to specifiy where you want the directory 
// what kind of file it will be

if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('folder already exists');
});
} else {
  // rmdir stands for remove directory
  // we have to specifiy file you want from the directory
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleteing files
// before you want to delete a file make sure that it exists first 
if(fs.existsSync('./doc-example/deletedMe.txt')) {
    // the method use to delete directories is unlink()
    // takes in the path of the file you want to delete
    // the second arguement is a callback function to log any errors
    fs.unlink('./doc-example/deletedMe.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('the file was deleted');
    })
}

// Streams and Buffer notes
// streams let us start using data before it has finished loading
// it will allow us to access the data that is being sent or created 
// as it is being sent or created

// buffers complement streams becasue they are package container of data
// works like netflix - we dont have to wait for the whole movie to load 
// to start watching it - netflix loads bit of the movie at a time 