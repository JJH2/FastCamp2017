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

const sql = "DELETE FROM member WHERE id=?";

const arr = ['장재훈2'];

pool.getConnection((err, conn) => {
    if (err) {
        return console.log(err);
    };
    conn.query(sql, arr, (err, result) => {
        if (err) {
            return console.log(err);
        };
        console.log("삭제 완료");
        conn.release();
    });
});