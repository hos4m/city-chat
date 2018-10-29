const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const events = require('../events');

io.on('connection', socket => {
  console.log('a client connected');

  socket.on(events.CREATE_ROOM, data => {
    console.log(data);
  });
});

http.listen(3000, () => {
  console.log('----------------------------------');
  console.log('listening on *:3000');
  console.log('----------------------------------');
});
