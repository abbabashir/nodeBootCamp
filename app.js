const http = require('http')
const port = 8080

//PORTS, 3000, 3001, 8080, 5000
const hostname = '127.0.0.1'
const fileRead = require('fs')

fileRead.readFile('text.txt', 'utf-8', (error, data) =>{
    console.log(data);
})

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'Utf-8')
    res.end(`<h1>Hello From node</h1>`)
})


server.listen(port, hostname, () => {
    console.log(`Server is running on port http://${hostname}:${port}`);
})