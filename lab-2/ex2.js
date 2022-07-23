const http = require ('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');


gzip = zlib.createGzip()

http.createServer((req, res) => {

    //res.end(fs.readFileSync('card.jpg'));
    //fs.readFile('card.jpg', (err,date) =>{
       // if (err) => console.log(erro)
      // esle res.end(data)
    //})
      //fs.createReadStream(path.join(__dirname, 'lab2', 'wbeg')).pipe(gzip).pipe(res);
      fs.createReadStream(path.join(__dirname, 'lab2', 'wbeg')).pipe(res);
      res.end()
}).listen(3000, () => {
    console.log("listening to 3000")
})