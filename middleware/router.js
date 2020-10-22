'use strict';
const express = require('express');
const basicAuth = require('../middleware/auth/playerAuth.js');
const signUp = require('./playerSignUp.js');
const router = express.Router();

router.post ('/signup',signUp, async (request, response, next) => {
});

router.post('/signin',basicAuth, async (request,response,next) => {
    let showUser = {
        user:request.user.username
    }
    response.status(200).send(showUser);
});

module.exports = router;