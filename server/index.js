const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const dotenv = require('dotenv');

dotenv.config({ path: `${process.cwd()}/server/.env` });
const events = require('../events');
const firebaseInit = require('./utils/firebaseInit');

io.on('connection', socket => {
  console.log('a client connected');
  firebaseInit();

  socket.on(events.CREATE_ROOM, data => {
    console.log(data);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
