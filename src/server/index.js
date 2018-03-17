var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// Server config
var port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Test route
app.get('/user/login', function(req, res) {
    console.log('Authenticating a user');
    res.status(200).json({success: true, message: ''});
});

app.listen(port);
console.log('Node.js server running at http://localhost:' + port);

module.exports = app; // for testing
