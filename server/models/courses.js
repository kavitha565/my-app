const mongodb = require('mongodb');
const getDB = require('../utils/database').getDB;
class Courses{
    constructor(course,image){
        this.course = course
        this.image = image
    }
    addCourse(){
        const db = getDB();
        return db.collection('courses').insertOne(this)
    }
    getCourses(){
        const db = getDB();
        return db.collection('courses')
        .find()
        .toArray()
    }
    deleteCourse(courseId){
        const db = getDB();
        return db.collection('courses').deleteOne({_id: new mongodb.ObjectId(courseId)})
    }
}
module.exports = Courses;