const dns = require('dns');

dns.resolveAny('www.miu.edu', (err, addresses) => {
    if (err){
        console.log(err)
    } else {
        console.log(addresses)
    }
})