// index.js
// where your node app starts

require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// static files
app.use(express.static('public'));

// root route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Request Header Parser Endpoint
app.get('/api/whoami', function (req, res) {
  res.json({
    ipaddress: req.ip || req.headers['x-forwarded-for'],
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// listen for requests
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});