const names = require('./names')
const greets = require('./proper')

console.log(names.john);
console.log(names.Mary);

greets(names.john)
greets(names.Mary)