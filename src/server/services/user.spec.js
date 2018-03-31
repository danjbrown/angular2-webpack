let chai        = require('chai');
let chaiHttp    = require('chai-http');
let Server      = require('./server');
let User        = require('./user');
let should      = chai.should();

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
            .get('/user/login')
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