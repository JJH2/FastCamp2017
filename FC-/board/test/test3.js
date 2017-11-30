'use strict';
const mysql = require('mysql');
const obj = {
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    databass: 'test'
};

const pool = mysql.createPool(obj);

pool.getConnection((err, conn) => {
    conn.query('SELECT 1 + 1 as solution', (error, results) => {
        console.log(results);
        console.log(results[0].solution);
        conn.release();
    });

});