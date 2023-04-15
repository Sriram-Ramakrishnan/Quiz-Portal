const config  = require('./config')

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "questions",
    password: config.pg_password, // Add your own postgres password here 
    port: 5432,
});

module.exports = pool;