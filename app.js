var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT);
app.set('view engine', 'pug')

app.use(express.static('/home/ubuntu/workspace/public'))

app.get('/', function (req, res) {
  res.sendFile('/home/ubuntu/workspace/views/index.html');
});

io.on('connection', function (socket) {
  socket.emit('test', {test: 'Works'})
  socket.on('Update Text', function(data) {
    
  });
  socket.on('Update Blocks', function (data) {
    console.log();
  });
  console.log("Connection");
});