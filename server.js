const http = require('http');
const express = require('express');
const server = express();;
const bodyParser = require('body-parser');
const port = 8081;

server.use(express.static('public'))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.get('/', function(req, res) {
    res.sendfile('index.html')
})


server.listen(port, function() {
  console.log('Server is running!');
})