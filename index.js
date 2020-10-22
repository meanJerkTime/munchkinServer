'use strict';

require('dotenv').config();
const server = require('./server.js');

const PORT = process.env.PORT || 3000;

// Database connection

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

server.start(PORT);
