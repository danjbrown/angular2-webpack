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
    }
    
    start() {
        // Server config
        const port = process.env.PORT || 8081;

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(this.router);
        this.app.listen(port);

        // CTRL + C server shutdown
        process.on('SIGINT', () => {
            this.logger.info('Caught interrupt signal');
            process.exit();
        });

        this.logger.info('Node.js server running at http://localhost:' + port);
    }
}

module.exports = Server;
