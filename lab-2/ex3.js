const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const gzip = zlib.createGzip()

// const readable = fs.createReadStream(path.join(__dirname, 'source.txt'));
// const writeable = fs.createWriteStream(path.join(__dirname, 'destination2.txt.gz'))
// const zip = readable.pipe(gzip).pipe(writeable);

fs.createReadStream(path.join(__dirname, 'destination2.txt.gz'))
   .pipe( zlib.createGzip())
   .pipe(fs.createWriteStream('source.txt'));