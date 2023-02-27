const fileRead = require('fs')

fileRead.readFile('text.txt', 'utf-8',(error, data) => {
    console.log(data);
})