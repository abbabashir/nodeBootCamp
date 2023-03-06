const os = require('os')

const user = os.userInfo()
console.log(user);

const upTime = os.uptime()
console.log(`This system has been up for ${upTime} seconds`);

const systemProperties = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    version: os.version()
}

console.log(systemProperties);