require('dotenv').config({
    path: '.env'
});


const express = require('express');
const AuthenticationRouter = require('./app/routes/authentication');
const NewsRouter = require('./app/routes/news');

class appController {
    express;
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use('/api/v1', AuthenticationRouter);
        this.express.use('/api/v1', NewsRouter);
    }
}

module.exports = new appController().express;