const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let db;
const mongoConnect = (callBack)=>{
    MongoClient.connect('mongodb+srv://kavitha565:kavi@1996@cluster0-0lppb.mongodb.net/learning?retryWrites=true&w=majority',{ useNewUrlParser: true })
    .then(client=>{
        console.log("Connection to DB success!!");
        db = client.db();
        callBack(db);
    }).catch(err=>{
        console.log(err);
        throw err;
    })
}
const getDB = ()=>{
    if(db){
        return db; // returns the database instance to perform db operations
    }
    throw 'No database found!!';
}
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
//module.exports = mongoConnect;
