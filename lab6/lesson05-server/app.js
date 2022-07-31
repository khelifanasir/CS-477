const express = require ('express');
const cors = require('cors');

const booksroute = require('./routes/booksroutes');
const {mongoConnect} = require('./utils/database1');
const app = express();

app.use(cors())
app.use(express.json());

app.use('/books', booksroute);


mongoConnect(() => {
    app.listen(3000, ()=> {console.log("listening to 3000")});
})
