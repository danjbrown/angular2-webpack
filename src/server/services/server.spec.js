'use strict';

const Server      = require('./server');
const assert      = require('chai').assert;

describe('Server service', () => {
    it('should create a new instance of the server', () => {
        const server = new Server();
        assert.instanceOf(server, Server);
    });
});