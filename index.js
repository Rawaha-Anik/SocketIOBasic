const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

expressServer.listen(8080, () => {
  console.log('server running @ 8080');
});
