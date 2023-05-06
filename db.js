const Pool = require("pg").Pool;

const pool = new Pool(
    {
        user: "postgres",
        password: "rootuser",
        host: "localhost",
        port: 5432,
        database: "quiz_users"
    }
);

module.exports = pool;
