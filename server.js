var express = require('express');
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
const {subscribe} = require('./get-serial');

app.use(express.static('public'));

io.on('connection', function(socket) {

  console.log('Connection established');

  const onStateChange = state => io.emit('state-change', state)
  subscribe(onStateChange)
});

// setInterval(() => io.emit('state-change', {
//   box1: '1',
//   box2: '0',
//   rfid: 'ASS232340'
// }), 4000)

http.listen(3000, function() {
  console.log('listening on *:3000');
});
