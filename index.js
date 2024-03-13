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
  // setTimeout(() => {
  //   socket.send('Rawaha Anik');
  // }, 10000);

  // setInterval(() => {
  //   let d = new Date();
  //   let t = d.getTime();
  //   // socket.send(t);
  //   socket.emit('rawaha', `This is ${t}`);
  // }, 1000);
  // socket.on('disconnect', () => {
  //   console.log('User Disconnected');
  // });
  socket.on('Rawaha', (message) => {
    console.log(message);
  });
});
expressServer.listen(8080, () => {
  console.log('server running @ 8080');
});
