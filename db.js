const mysql = require("mysql");
const dbConfig = require("./app/config/db.config.js");

var connection = mysql.createPool({
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11392711',
  password: 'yrpQuGANs3',
  database: 'sql11392711',
  port: '3306'
});

module.exports = connection;
