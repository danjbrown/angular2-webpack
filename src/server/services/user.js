'use strict';

class User {
    constructor(server) {
        this.server = server;
        this.router = server.router;
        this.logger = server.logger;

        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/user/login', this.authenticateUser.bind(this));
    }
    
    authenticateUser(req, res) {
        console.log('Authenticating a user');
        res.status(200).json({success: true, message: ''});
    }
}

module.exports = User;
