import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config();


let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);

//goi ham connect
connectDB();

let port = process.env.PORT || 6969;
// port equal ===  undefined => port ===6969
app.listen(port,()=>{ 
    //callback
    console.log('backend nodejs is runing on the port: '+ port);
});