'use strict'; 
const base64 = require('base-64');
const players = require('../models/players-model.js');
// require dependancies 

module.exports = async(request,response,next) => {
    try {
        // get username and pass from user
        // check the headers
        let authorization = request.headers.authorization;
        let encoded = authorization.split(' ')[1];
        let creds = base64.decode(encoded);
        let [username, password] = creds.split(":");

        // get user instance from model
        let userRecord = await players.validateBasic(username, password);
        if(request.user = userRecord) {
            next();
        }
    
    } catch (e) {
        next('Invalid Username or password'); 
    }
}


