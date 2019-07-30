const express = require('express'); // Load express module
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./server/config');
const mongoConnect = require('./server/utils/database').mongoConnect;
const app = express();
app.use(cors());
app.use(bodyParser.json());
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
//server.listen(port,()=>console.log(`Node server running on port ${port}`));

mongoConnect((db)=>{
    server.listen(port,()=>console.log(`Node server running on port ${port}`));
    //console.log(db);
});


