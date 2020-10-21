'use strict';
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);

app.use(express.urlencoded({extended:true}));

let custom_id = 0;
io.engine.generateId = (req) => {
  return "User:" + custom_id + Math.floor(Math.random() * 10000);
};

io.on('connection', (socket) => {
  
  socket.on('fromClient', () => {
    console.log(socket.id, 'Connected');
      socket.emit('toClient');
  });
  socket.on('answers', (payload) => {
    // console.log(payload.roomsList);
  });

  // on create room also joins the room
  socket.on('createRoom', function(room) {
    socket.join(room);
    console.log(socket.id, 'joined Room', room);
  });
  // joins the room
  socket.on('joinRoom', function(room) {
    socket.join(room);
    // console.log(socket.id, 'joined Room', room);
  });
  console.log(socket.adapter.rooms);
});
 



function start(port) {
    server.listen(port, () => console.log('server up on port', port)); 
}

module.exports = {
    start:start
}
