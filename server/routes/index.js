const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const User = require('../models/user');
const Courses = require('../models/courses');
const path = require('path');
const responseJson = {};
function setResponseJson(){
    responseJson.responseCode = 200;
    responseJson.responseStatus = 'success';
    responseJson.data = {};
}
global.dataObj=[
    {
      "name": "Bagpack",
      "quantity": 2,
      "price": 3000
    },
    {
      "name": "Jeans",
      "quantity": 1,
      "price": 2000
    },
    {
      "name": "Tracks",
      "quantity": 1,
      "price": 1000
    } 
]
global.scores = [
    { y: 2 },
    { y: 11},
    { y: 4 },
    { y: 9 }
]
global.initial = 3;
router.get('/', (req, res) => {
    console.log("main page!!");
    res.sendFile(path.join(__dirname,'../../dist/my-app/index.html'));
})
router.get('/api/getData',(req,res)=>{
    for(var i=0;i<global.dataObj.length;i++){
        global.dataObj[i].quantity+=1;
        global.dataObj[i].price+=100;
    }
    var productData = {
        name : "Test product",
        quantity : 1,
        price : 2000
    }
    global.dataObj.push(productData);
    console.log(global.dataObj);
    res.send(global.dataObj);
})
router.get('/api/getMatchData',(req,res)=>{
    global.initial+=1;
    global.scores.push({
        y: global.initial
    })
    res.send(global.scores);
})
router.get('/api/login',(req,res)=>{
    setResponseJson(); 
    //Data base operation to be performed to check user is valid or not
    //check in DB whether username exist
    //If exist check password is valid else error with password invalid
    //If username not exist error with invalid user please register
    let user = new User();
    user.getUser(req.query.username)
        .then((response)=>{
            if(response && response.length==1){
                //username exits check password correct or not
                if(response[0].password === req.query.password){
                    responseJson.data.message = "Login success";
                    res.send(responseJson);
                }else{
                    responseJson.responseStatus="failure";
                    responseJson.data.message= "Password is invalid";
                    res.send(responseJson);
                }
            }else{
                //username not exist
                responseJson.responseStatus="failure";
                responseJson.data.message= "User not exist,Please register";
                res.send(responseJson);
            }
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
            responseJson.responseStatus="failure";
            responseJson.data.message= "Unable to login,Please try again later"
        })
})
router.post('/api/register',(req,res)=>{
    setResponseJson();
    console.log(req.body);
    //check user already exist
    let user = new User();
    user.getUser(req.body.username)
        .then((response)=>{
            if(response && response.length>0){
                //User already exit
                responseJson.responseStatus = "failure";
                responseJson.data.message = "Username already exist";
                res.send(responseJson);
            }else{
                 //DB operation to add a user
                let user = new User(req.body.name,req.body.email,req.body.mobile,req.body.username,req.body.password);
                user.addUser()
                    .then((response)=>{
                        console.log(response);
                        res.status(200).send(responseJson);
                    })
                    .catch((err)=>{
                        console.log(err);
                        res.status(500).send("Unable to Register,Please try again later");
                    })
            }
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).send("Unable to Register,Please try again later");
        })
   
})
router.post('/api/product/addProduct',(req,res)=>{
    setResponseJson();
    console.log(req.body);
    let product = new Product(req.body.title,req.body.price,req.body.description,req.body.imageUrl);
    product.save()
        .then((response)=>{
            responseJson.data.message = "Product saved successfully"
            res.status(200).send(responseJson);
        })
        .catch((err)=>{
            console.log(err);
        })
})
router.get('/api/product/getAllProduct',(req,res)=>{
    setResponseJson();
    let product = new Product();
    product.fetchAll()
    .then((products)=>{
        console.log("Product fetched successfully!!");
        res.send(products);
    })
    .catch((err)=>{
        console.log(err);
    })
})
router.get('/api/product/getProductBySearchData',(req,res)=>{
    setResponseJson();
    let product = new Product();
    console.log(req.query);
    product.fetchById(req.query.search)
    .then((products)=>{
        console.log("Product fetched successfully!!");
        res.send(products);
    })
    .catch((err)=>{
        console.log(err);
    })
})
router.post('/api/product/updateProduct',(req,res)=>{
    setResponseJson();
    let product = new Product(req.body.title,req.body.price,req.body.description,req.body.imageUrl,req.body.id,"update");
    product.save()
        .then((response)=>{
            res.status(200).send(responseJson);
        })
        .catch((err)=>{
            console.log(err);
        })
})
router.post('/api/product/deleteProduct',(req,res)=>{
    setResponseJson();
    let product = new Product();
    product.deleteById(req.body.id)
        .then((response)=>{
            console.log(response);
            res.status(200).send(responseJson);
        })
        .catch((err)=>{
            console.log(err);
        })
})
router.get('/api/courses',(req,res)=>{
    setResponseJson();
    let course = new Courses();
    course.getCourses()
        .then((response)=>{
            responseJson.data = response;
            res.status(200).send(responseJson);
        })
        .catch((err)=>{
            console.log(err);
        })
})
router.post('/api/courses',(req,res)=>{
    setResponseJson();
    console.log(req.body);
    let course = new Courses(req.body.course,req.body.imageUrl);
    course.addCourse()
        .then(response=>{
            responseJson.data.message = "Course added successfully"
            res.status(200).send(responseJson);
        })
        .catch(err=>{
            console.log(err);
        })
})
router.delete('/api/courses/:id',(req,res)=>{
    setResponseJson();
    let course = new Courses();
    course.deleteCourse(req.params.id)
        .then(response=>{
            responseJson.data.message = "Course deleted successfully"
            res.status(200).send(responseJson);
        })
        .catch(err=>{
            console.log(err);
        })
})
module.exports = router;