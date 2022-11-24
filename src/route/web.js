import express from 'express';
import homecontroller from "../controllers/homecontroller";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homecontroller.gethomepage );
    router.get('/about', homecontroller.aboutme );
    return app.use('/',router);
}

module.exports =initWebRoutes;