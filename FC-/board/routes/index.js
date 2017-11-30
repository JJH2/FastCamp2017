'use strict';
var express = require('express');
var router = express.Router();


const mysql = require('mysql');
const obj = {
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
};

const pool = mysql.createPool(obj);


/* GET localhost:3000 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET localhost:3000/writeform */
router.get('/writeform', (req, res, next) => {
  res.render('writeform.ejs', { title: '게시판 글쓰기' });
});

/* POST localhost:3000/write */
router.post('/write', (req, res, next) => {
  console.log("req.body=", req.body);
  const writer = req.body.writer;
  const pwd = req.body.pwd;
  const subject = req.body.subject;
  const content = req.body.content;
  
  const sql = "INSERT INTO board(writer, pwd, subject, content) VALUES(?, ?, ?, ?)";
  const arr = [writer, pwd, subject, content];

  pool.getConnection((err, conn) => {
    if (err) {
      return next(err); 
    };
    // if(err){return next(err)} 에러가 발생해도 서버가 죽지 않고 에러 메세지를 표현한다.
    conn.query(sql, arr, (err, result) => {
      if (err) {
        return next(err);
      };

      console.log("저장 완료");
      conn.release();
      //connection을 돌려준다.
      res.send("good");
      //서버에서 답변을 꼭 해줘야 오류가 안 난다. res.send();
    });
  });

});
module.exports = router;


/*
create table board(
    id int(11) not null,
    pwd varchar(20) not null,
    subject varchar(100) not null,
    content text not null,
    writer varchar(20),
    regdate datetime,
    hit int(11),
    primary key(id)
);
*/