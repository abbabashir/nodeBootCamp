const fileStream = require('fs')
const { readFileSync } = require('fs')

fileStream.writeFileSync(
    './result.txt', 
    'I am writting into this file gvhjhjhjj')

const readfile = readFileSync('./anything.txt', 'utf8')
console.log('====================================');
console.log(readfile);
console.log('====================================');