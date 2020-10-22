'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./middleware/router.js');

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

app.use(router);


module.exports = {
    app, 
    start: (port) => app.listen(port, console.log('server up on:', port))
}
