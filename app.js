'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var path = require('path');
var config = require('./config/environment');

var socket = require('socket.io-client')('https://www.mctl.gq:3000');

var app = express();
var server = require('http').Server(app);
 
var io = require('socket.io')(server);






require('./config/express')(app);
require('./routes.js')(app);

app.listen(process.env.PORT || 80);
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.on('connection', function(socket) {
  console.log('connection made');
  socket.setTimeout(100);
});
console.log('Listening on ' + config.port + ' in ' + app.get('env') + ' mode...');

  socket.on('connect', function(){});
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
socket.emit('last-track');
socket.on('new-track', function(data) {
    console.log(data);
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

exports = module.exports = app;
