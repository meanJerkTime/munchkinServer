'use strict';
const { request, response } = require('express');
const express = require('express');
const playerAuth = require('../middleware/auth/playerAuth.js');
const signUp = require('./playerSignUp.js');
const router = express.Router();

router.post ('/signup',signUp, async (request, response, next) => {
});

router.get('/signin',playerAuth, async (request,response,next) => {
    let showUser = {
        user:request.user.username
    }
    console.log(showUser.user, 'signed in');
    response.status(200).send(showUser);
});

module.exports = router;