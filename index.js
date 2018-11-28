const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket) {
//   console.log('__A USER HAS CONNECTED__');
//   socket.on('disconnect', function(){
//     console.log('__DISCONNECTED__');
//   });
// });

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

// io.emit('THIS IS THE EVENT', { for: 'everyone' }); // sends a message to everyone

// io.on('connection', function(socket) {
//   socket.on('chat message', function(msg) {
//     io.emit('chat message', msg);
//     // socket.broadcast.emit('Heyyyy');
//   })
// });

// io.write('====== HELLLOOOOO =======');

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    console.log('__THE MESSAGE__' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});