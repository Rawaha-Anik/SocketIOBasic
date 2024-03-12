const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const { Server } = require('socket.io');
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
const socketio = new Server(expressServer);
socketio.on('connection', (socket) => {
  console.log('new User Connected');
  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });
});
expressServer.listen(8080, () => {
  console.log('server running @ 8080');
});
