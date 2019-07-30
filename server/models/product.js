const getDB = require('../utils/database').getDB;
const mongodb = require('mongodb');
class Product{
    constructor(title,price,description,imageUrl,id,operation){
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        if(operation=="update")
        this._id = new mongodb.ObjectId(id);
        else
        this._id = id;
    }
    save(){
        const db = getDB(); // returns a db instance
        let dbOp;
        if(this._id){
            //update existing product
            dbOp = db.collection('products').updateOne({_id : this._id},{$set:this})
        }else{
            //insert new product
            dbOp = db.collection('products').insertOne(this)
        }
        return dbOp // it returns a promise
        .then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        })
    }
    fetchAll(){
        const db = getDB();
        return db.collection('products')
        .find() // returns a cursor instead of promise which is used to get tons of products one by one
        .toArray()  // converted to array using toArray and it returns a promise
        .then((products)=>{                                
            return products
        }).catch((err)=>{
            console.log(err);
        })
    }
    fetchById(productId){
        const db = getDB();
        return db.collection('products')
        .find({_id:new mongodb.ObjectId(productId)}) //since mongodb creates a objectId of each document 
        //of type ObjectId we cant directly pass productId which is string we should convert to ObjectId
        .toArray()
        .then((products)=>{                                
            return products
        }).catch((err)=>{
            console.log(err);
        })
    }
    deleteById(productId){
        const db = getDB();
        return db.collection('products').deleteOne({_id:new mongodb.ObjectId(productId)})
    }

}
module.exports = Product;
