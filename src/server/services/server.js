'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const log4js        = require('log4js');
const logger        = log4js.getLogger();
logger.level = 'info';

class Server {
    constructor() {
        this.app        = express();
        this.router     = express.Router();
        this.logger     = logger;
        this.port       = process.env.PORT || 8081;
        this.host       = 'localhost';
    }
    
    start() {
        this.app.use((req, res, next) => {
            // allow the client applications to connect
            const allowedOrigins = ['http://localhost:8080', 'http://localhost:3000'];
            const origin = req.headers.origin;
            if(allowedOrigins.indexOf(origin) !== -1){
                res.setHeader('Access-Control-Allow-Origin', origin);
            }
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(this.router);
        this.app.listen(this.port);

        // CTRL + C server shutdown
        process.on('SIGINT', () => {
            this.stop();
        });

        this.logger.info('Starting server at http://' + this.host + ':' + this.port);
    }

    stop() {
        this.logger.info('Stopping server');
        process.exit();
    }
}

module.exports = Server;
