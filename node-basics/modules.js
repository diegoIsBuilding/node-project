// require the peoples file 
// essentially we are importing the access to the data in 
// people.js and allowing modules.js to take data if it needs it
const {people, ages} = require('./people')
// when you console log the required file you get an empty object
// to get the data from the file we must export the data we need
// go back to people.js and export the data
console.log(people, ages)

const os = require('os');
console.log(os.platform(), os.homedir());