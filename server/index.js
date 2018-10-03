const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('a client connected');
});

http.listen(3000, () => {
  console.log('----------------------------------');
  console.log('listening on *:3000');
  console.log('----------------------------------');
});
