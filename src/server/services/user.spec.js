'use strict';

const chai        = require('chai');
const chaiHttp    = require('chai-http');
const Server      = require('./server');
const User        = require('./user');
const should      = chai.should();

chai.use(chaiHttp);

describe('User service', () => {
    let server;
    let service;

    before(() => {
        server = new Server();
        service = new User(server);
        server.start();
    });

    after(() => {
        server.stop();
    });

    it('it should login a user', (done) => {
        chai.request(server.app)
            .post('/user/login')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({user: 'test', password: 'test'})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success', true);
                res.body.should.have.property('message', '');
                done();
        });
    });

    it('it should logout a user', (done) => {
        chai.request(server.app)
            .get('/user/logout')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success', true);
                res.body.should.have.property('message', '');
                done();
        });
    });
});