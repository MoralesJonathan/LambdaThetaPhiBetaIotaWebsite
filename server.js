const http = require('http');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = 8081;

server.use(express.static('public'))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

var transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
        user: 'webmaster.fsulambdas@gmail.com',
        pass: 'Original1975'
    }
});


server.post('/sendEmail',function(req, res) {
    transporter.sendMail({
      from: req.body.fromEmail,
      to: 'webmaster.fsulambdas@gmail.com,vp.fsulambdas@gmail.com, president.fsulambdas@gmail.com',
      subject: req.body.subject, 
      text: req.body.message, 
      html: '<p>'+req.body.message+'</p>'
    }, (error, info) => {
      if (error) {
          return console.log(error);
          res.send(error)
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.send('Message '+info.messageId+' sent: '+ info.response);
    });
})

server.get('/', function(req, res) {
    res.sendfile('index.html')
})


server.listen(port, function() {
  console.log('Server is running!');
})