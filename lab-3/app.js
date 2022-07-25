const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();


app.use(express.urlencoded({extended: true}));

app.use('/process', (req, res, next) =>{
    console.log(req.body)
    fs.writeFile('blog.text', JSON.stringify(req.body), (err) =>{
        if(!err) {
            res.end(`save successfully http//localhost:3000/`)
        }
    })
    
});

app.use('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, 'blog.html'));
});



app.listen(3000, ()=> {
    console.log("listing to 3000...")
});

