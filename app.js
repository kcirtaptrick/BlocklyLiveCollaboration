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
  socket.on('Blockly Event', function(data) {
    console.log(data);
    socket.broadcast.emit('Blockly Event', data); 
  })
  // socket.on('Update Text', function(data) {
    
  // });
  socket.on('Update Workspace', function (data) {
    console.log();
  });
  
  socket.on('Client Test', function (data) {
    console.log(data);
    socket.broadcast.emit('test', data);
  })
  socket.on('Send Message', function (data) {
    console.log(data);
    socket.broadcast.emit('Send Message', data);
  })
  console.log("Connection");
});