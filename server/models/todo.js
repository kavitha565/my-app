const mongodb = require('mongodb');
const getDB = require('../utils/database').getDB;
class Todo{
    constructor(id,todoList,doneList){
        this.todo = todoList;
        this.done = doneList;
        this._id = id;
    }
    save(){
        const db = getDB();
        if(this._id){
            this._id = new mongodb.ObjectId(this._id);
            return db.collection('todo').updateOne({_id:this._id},{$set:this});
        }
        else
        return db.collection('todo').insertOne(this);

    }
    get(){
        const db = getDB();
        return db.collection('todo')
        .find()
        .toArray()
    }

}
module.exports = Todo;