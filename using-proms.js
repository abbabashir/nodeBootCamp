const http = require('http')

const hostname = '127.0.0.1'
const port = 5000

const Electronics = [
    {name: 'Phone', type: 'Android'},
    {name: 'Laptop', type: 'Windows'}
]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'utf-8')
    const getElectronics=()=>{
        setTimeout(()=>{
            for (let index = 0; index < Electronics.length; index++) {
                const element = Electronics[index];
                res.write(`<h1>${element.name}</h1>`)
            }
        }, 1000)
    }

    const addElectronic=(index)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                Electronics.push(index)
                
                const error = false;

                if (!error) {
                    resolve()
                }else{
                    reject('An error occured!')
                }
            }, 2000)
        })
    }


    addElectronic({ name: 'TV', type: 'plasma' }, getElectronics)
    
})

addElectronic({ name: 'Tv', type: 'Plasma'}).then(getElectronics)

server.listen(port, hostname, () =>{
    console.log(`Server is running on https://${hostname}:${port}`);
})