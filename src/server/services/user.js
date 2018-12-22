'use strict';

class User {
    constructor(server) {
        this.server = server;
        this.router = server.router;
        this.logger = server.logger;

        this.registerRoutes();
    }

    registerRoutes() {
        this.router.post('/user/login', this.login.bind(this));
        this.router.get('/user/logout', this.logout.bind(this));
        this.router.get('/users', this.getUsers.bind(this));
    }
    
    login(req, res) {
        this.authenticate(req, res).then(() => {
            res.status(200).json({success: true, message: ''});
        })  
            .catch((error) => {
                res.status(401).json({success: false, message: error});
            });
    }

    logout(req, res) {
        res.status(200).json({success: true, message: ''});
    }

    getUsers(req, res) {
        res.status(200).json({success: true, data:
            {
                users : [
                    {name: 'User 1', id: 1234, address: 'London'},
                    {name: 'User 2', id: 5678, address: 'Rome'},
                    {name: 'User 3', id: 4321, address: 'Paris'},
                    {name: 'User 4', id: 8765, address: 'New York'}
                ]
            }
        });
    }

    authenticate(req) {
        return new Promise((resolve, reject) => {
            if (req.body.user === 'test' && req.body.password === 'test') {
                resolve();
            }
            reject('Invalid user');
        });
    }
}

module.exports = User;
