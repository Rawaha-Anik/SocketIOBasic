const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
const socketio = new Server(expressServer);

const buyNsp = socketio.of('/buy');
buyNsp.on('connection', () => {
  buyNsp.emit('myEvent', 'Hello Buy');
});

const sellNsp = socketio.of('/sell');
sellNsp.on('connection', () => {
  sellNsp.emit('myEvent', 'Hello sell');
});

expressServer.listen(8080, () => {
  console.log('server running @ 8080');
});
