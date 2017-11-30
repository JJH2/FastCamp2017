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

const sql = "UPDATE member SET name=?, email=?, tel=? WHERE id=?";
const arr = ['taeeunkim', 'thftns92@naver.com', '01051015800', '장재훈2'];

pool.getConnection((err, conn) => {
    if (err) {
        return console.log(err);
    };
    conn.query(sql, arr, (err, result) => {
        if (err) {
            return console.log(err);
        };
        console.log("수정 완료");
        conn.release();
    });
});