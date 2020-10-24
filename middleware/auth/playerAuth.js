'use strict'; 
const base64 = require('base-64');
const players = require('../models/players-model.js');
// require dependancies 

module.exports = async(request,response,next) => {
    try {
        let userRecord = await players.validateBasic(request.body.username,request.body.password); 
        if(request.user = userRecord) {
            next();

        }
    
    } catch (e) {
        next('Invalid Username or password'); 
    }
}

