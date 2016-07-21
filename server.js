var express = require('express');
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
const {subscribe} = require('./get-serial');

app.use(express.static('public'));

io.on('connection', function(socket) {
  // socket.on('chat message', function(msg) {
  //   io.emit('chat message', msg);
  // });
  console.log('Connection established');

  const onStateChange = state => io.emit('state-change', state)
  subscribe(onStateChange)
});

setTimeout(() => io.emit('state-change', 'deded'), 4000)

http.listen(3000, function() {
  console.log('listening on *:3000');
});
