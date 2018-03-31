'use strict';

class User {
    constructor(server) {
        this.server = server;
        this.router = server.router;
        this.logger = server.logger;

        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/user/login', this.login.bind(this));
        this.router.get('/user/logout', this.logout.bind(this));
    }
    
    login(req, res) {
        res.status(200).json({success: true, message: ''});
    }

    logout(req, res) {
        res.status(200).json({success: true, message: ''});
    }
}

module.exports = User;
