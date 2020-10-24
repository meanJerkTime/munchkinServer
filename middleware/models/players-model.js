'use strict';


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const players = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

players.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

players.statics.validateBasic = async function (username, password) {
    // look up user
    let user = await this.findOne({username: username});

    // compare passwords
    let isValid = await bcrypt.compare(password, user.password)
    if(isValid) {
        return user;
    } else {
        return undefined;
    }
}

module.exports = mongoose.model('players', players);