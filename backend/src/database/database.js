const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = require('./config');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
    connectionLimit: 10, // Establecer el límite máximo de conexiones
    queueLimit: 0,
});

module.exports = pool;
