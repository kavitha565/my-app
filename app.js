const express = require('express'); // Load express module
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./server/config');
const multer = require('multer');
const mongoConnect = require('./server/utils/database').mongoConnect;
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(multer().single('image')); //multer has func called single which expects only single file to which input name that holds the file send as arg
//setting env 
process.env.NODE_ENV = 'development';
//Based on env load the config data
function setEnvConfig(){
    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV === 'development'){
        app.set("configObj",config.dev);
        process.env.configKey = 'dev';
    }else{
        app.set("configObj",config.prod);
        process.env.configKey = 'prod';
    }
}
setEnvConfig();
//setting up routes
const routes = require('./server/routes/index');
app.use(routes);
//Logger 
const logger = require('./server/utils/logger');
//serving static files
app.use(express.static('dist/my-app'));
const port = app.get("configObj").port || 8000;
const server = http.createServer(app);

mongoConnect((db)=>{
    server.listen(port,()=>console.log(`Node server running on port ${port}`));
    //console.log(db);
});

//db connection using mongoose
// mongoose.connect('mongodb+srv://kavitha565:kavi@1996@cluster0-0lppb.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })
//     .then(response=>{
//         server.listen(port,()=>console.log(`Node server running on port ${port}`));
//     })
//     .catch(err=>{
//         console.log("Error occured in connecting to DB "+err);
//     })


