const Server    = require('./services/server');
const User      = require('./services/user');

const server    = new Server();
const user      = new User(server);

server.start(server);
