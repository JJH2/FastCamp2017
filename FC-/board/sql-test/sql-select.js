'use strict';
const mysql = require('mysql');
const obj = {
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
};

const pool = mysql.createPool(obj);

const sql = "SELECT id, name, email, tel FROM member"; 
// 컬럼명을 적용해도 되고 *를 사용해도 되지만 각각 넣어서 코딩하는게 더 효율적이다.
const arr = [];

pool.getConnection((err, conn) => {
    if (err) {
        return console.log(err);
    };
    conn.query(sql, arr, (err, rows) => {
        if (err) {
            return console.log(err);
        };
        console.log("rows", rows);
        conn.release();
    });
});