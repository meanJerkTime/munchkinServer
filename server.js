'use strict';
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));



function start(port) {
    app.listen(port, () => console.log('server up on port', port)); 
}

module.exports = {
    start:start
}
