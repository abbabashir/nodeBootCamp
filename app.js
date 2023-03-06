const os = require('os')

const userInfo = os.userInfo()
console.log(userInfo);

const systemProperties = {
    name: os.type(),
    version: os.version(),
    totalMemory: os.totalmem(),
    release: os.release(),
    freeMemory: os.freemem(),
    runnig: os.cpus()
}

console.log(systemProperties);