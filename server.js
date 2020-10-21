'use strict';


const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('Hub connected');
    socket.emit('hubConnected');
})

app.use(express.urlencoded({extended:true}));

function start(port) {
    http.listen(port, () => console.log('server up on port', port)); 
}


module.exports = {
    start:start
}
