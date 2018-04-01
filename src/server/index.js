const Server    = require('./services/server');
const User      = require('./services/user');

const server    = new Server();
new User(server);

server.start(server);
