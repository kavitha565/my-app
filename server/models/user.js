const mongodb = require('mongodb');
const getDB = require('../utils/database').getDB;
class User{  //User is a new collection in Database
    constructor(name,email,mobile,username,password){
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.username = username;
        this.password = password;
    }
    addUser(){
        const db = getDB();
        return db.collection('user').insertOne(this);
    }
    getUser(username){
        const db = getDB();
        return db.collection('user').find({username : username}).toArray()
    }
}
module.exports = User;