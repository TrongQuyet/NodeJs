import express from 'express';
import homecontroller from "../controllers/homecontroller";//import controller de su dung

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homecontroller.gethomepage ); //router phan quyen cho controler
    router.get('/about', homecontroller.aboutme );
    return app.use('/',router);
}

module.exports =initWebRoutes;