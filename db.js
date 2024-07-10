const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'squadprata',
    password: 'admin',
    port: 16543,
});

module.exports = pool;


