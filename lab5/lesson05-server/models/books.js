"use-strict"

let books = [
    {id: 1, title:"the Majic tree", ISBN: 12321, publishedDate: "12-01-2012", author:"Agatha Christie" },
    {id: 2, title:"Winter Fairy", ISBN: 14301, publishedDate: "10-01-2000", author:"Barbara Cartland" },
    {id: 3, title:"Wizards of Ice", ISBN: 92381 , publishedDate: "09-01-1990", author:"Danielle Steel" },
    {id: 4, title:"True love", ISBN: 87321, publishedDate: "01-01-1902", author:"William Shakespeare" }
]

let newId = 5;
module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author){
        this.id = id,
        this.title = title,
        this.ISBN = ISBN,
        this.publishedDate = publishedDate,
        this.author = author
    }

    static getAll(){
        return books;
    }

    static getByID(id){
        let index = books.findIndex(book => book.id == id);
        if (index < 0){
            throw new Error (`NO BOOK FOUND WITH ID: ${id}`);
        } else{
            return books[index];
        }
    }

    save(){
         this.id = newId++;
         books.push(this);
         return this;
    }

   update(){
      const index = books.findIndex(book => book.id == this.id);
      if (index < 0){
        throw new Error (`NO BOOK FOUND WITH ID: ${this.id}`)
      } else {
        books[index] = this;
        return this;
      }
   }
   
   static deleteByID(id){
    const index = books.findIndex(book => book.id == id);
    if (index < 0){
        throw new Error (`NO BOOK FOUND WITH ID: ${this.id}`)
      } else {
      let temp = books.splice(index, 1);
      return temp;
      }
    
   }
}

