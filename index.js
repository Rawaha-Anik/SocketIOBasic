const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const { Server } = require('socket.io');
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
const socketio = new Server(expressServer);
let cnt = 0;
socketio.on('connection', (socket) => {
  console.log('new User Connected');
  cnt++;
  console.log(`number of users: ${cnt}`);
  socketio.sockets.emit('myBroadCast', 'hello everyone !');
  socket.on('disconnect', () => {
    console.log('User Disconnected');
    cnt--;
    console.log(`number of users: ${cnt}`);
  });
});
expressServer.listen(8080, () => {
  console.log('server running @ 8080');
});
