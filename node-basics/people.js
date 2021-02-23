// create an array of names and console log the array
const people = ['Emmanuel','Diego','Habibi', 'Diana'];
const ages = [23, 521, 452, 6234];
// by exporting this array with module.exports
// modules.js file can now read the array and no
// longer give back an empty object
module.exports = {
    people, ages
}
