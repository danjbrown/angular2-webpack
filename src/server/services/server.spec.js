let chai        = require('chai');
let Server      = require('./server');
let assert      = require('chai').assert;

describe('Server service', () => {
    it('should create a new instance of the server', () => {
        const server = new Server();
        assert.instanceOf(server, Server);
    });
});