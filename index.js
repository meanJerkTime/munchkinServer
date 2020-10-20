'use strict';

const mysql = require('mysql'); 
require('dotenv').config();

const server = require('./server.js');



let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  
  connection.connect(function(err) {
      if (err) throw err;
      console.log(" mySQL Connected!");
    
      let checkCards = `SELECT * FROM door_cards`;
      connection.query(checkCards, function (err, result) {
          if(err) throw err;
          console.log(result);
      });
});

 server.start(process.env.PORT);
