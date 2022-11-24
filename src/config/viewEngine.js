import express from 'express';
// cau hinh views engine
let configViewEngine = (app)=> {
    app.use(express.static("./src/public"));
    app.set('view engine', "ejs");//su dung views engine ejs
    app.set('views',"./src/views")//lay views o packet views

}

module.exports = configViewEngine;