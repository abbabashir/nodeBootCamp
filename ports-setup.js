const http = require('http')

const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer((req, res) => {
    res.statusCode = 200,
    res.setHeader('Content-Type', 'utf-8')
    res.end(`<p>Hello Its still me</p>`)
})

server.listen(port, hostname, () =>{
    console.log(`Server is running on https://${hostname}:${port}`);
})