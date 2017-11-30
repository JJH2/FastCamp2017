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

const sql = "INSERT INTO member(id, name, email, tel) VALUES(?, ?, ?, ?)";

const arr = ['장재훈2', '장재훈2', 'idlinlee12@naver.com', '1212'];

pool.getConnection((err, conn) => {
    if (err) { 
        return console.log(err); 
    };
    conn.query(sql, arr, (err, result) => {
        if (err) {
            return console.log(err);
        };
        console.log("저장 완료");
        conn.release();
    });
});


/*
create table member(
    id varchar(20) not null,
    name varchar(10) not null,
    emaill varchar(100) not null,
    tel varchar(13) not null,
    primary key(id)
);
*/