'use strict';

require('dotenv').config();
const mysql = require('mysql'); 
const io = require('socket.io')(8080); // <-- Connected to whichever server is hosting events
const server = require('./server.js');
const gameRoom = io.of('/gameroom');


/** Primary game namespace */

/** Built-in method of socket.io engine to overwrite default socket ID and create a custom ID for all connected sockets */
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
 


// Database connection

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  
  connection.connect(function(err) {
      if (err) throw err;
      console.log(" mySQL Connected!");
    
      let checkCards = `SELECT * FROM door_cards`;
      connection.query(checkCards, function (err, result) {
          if(err) throw err;
          console.log(result);
      });
});

 server.start(process.env.PORT);
