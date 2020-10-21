'use strict';
const server = require('./server.js');
const io = require('socket.io')(server); // <-- Connected to whichever server is hosting events
const gameRoom = io.of('/gameroom');

let custom_id = 0;
io.engine.generateId = (req) => {
  return "User:" + custom_id + Math.floor(Math.random() * 10000);
};

io.on('connect', (socket) => {
  
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
 
