const names = require('./names')
const greets = require('./proper')
require('./olamide')

console.log(names.john);
console.log(names.Mary);

greets(names.john)
greets(names.Mary)