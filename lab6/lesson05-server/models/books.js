"use-strict"


const {getDB} = require('../utils/database1');
const {ObjectId} = require('mongodb');
// const self = Object.assign({}, this);
// delete self._id; // then on update {$set:self}
module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author){
        this._id = id,
        this.title = title,
        this.ISBN = ISBN,
        this.publishedDate = publishedDate,
        this.author = author
    }

    static getAll(){
      return getDB().collection('books').find().toArray();
    }

    static getByID(id){
     return  getDB().collection('books').findOne({_id:new ObjectId(id)});
       
    }

    save(){
      return  getDB().collection('books').insertOne(this)
    }

   update(){
   return getDB().collection('books').updateOne({_id: new ObjectId(this._id)},
   {$set: {title: this.title, ISBN: this.ISBN,publishedDate: this.publishedDate, author: this.author}}
   )
   }
   
   static deleteByID(id){
    return getDB().collection('books').deleteOne({_id: new ObjectId(id)});
    
   }
}

