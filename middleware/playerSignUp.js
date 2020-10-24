'use strict';

const players = require('./models/players-model.js');
module.exports = async(request,response,next) => {
    try {

        let obj = {
            username: request.body.username,
            password: request.body.password,
        }

        let record = new players(obj);
        // save the instance
        let newUser = await record.save();
        response.status(200).send(newUser);

    } catch (e) {
        next(e.message);
    }
}