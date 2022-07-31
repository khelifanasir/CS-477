const Book = require('../models/books');

exports.getAll =(req, res) =>{
   Book.getAll()
   .then(books =>{
    res.json(books)
   })
};

exports.getByID = (req, res)=>{
   Book.getByID(req.params.id)
   .then(book => res.json(book))    
}

exports.save = (req, res) => {
  let addBook = new Book(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author)
   addBook.save()
   .then(result => {
    addBook._id = result.insertedId;
    res.json(addBook);
   })
  
}

exports.update = (req, res)=>{
    let updateBook = new Book(req.params.id, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author);
      updateBook.update()
      .then(result =>{
        res.json(updateBook);
      })
    
}
exports.deleteByID = (req,res) =>{
    Book.deleteByID(req.params.id)
    .then(result => res.json({_id: req.params.id}))
}