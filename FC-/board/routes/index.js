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
      res.redirect('/list');
      //서버에서 답변을 꼭 해줘야 오류가 안 난다. res.send();
    });
  });
});


// GET http://localhost:3000/list
router.get('/list', (req, res, next) => {
  // res.send("여기는 리스트 입니다!");
  pool.getConnection((err, conn) => {
    if (err) {
      return next(err);
    };
    const sql = `SELECT 
                  num, 
                  subject, 
                  writer, 
                  DATE_FORMAT(regdate, '%Y-%c-%d %T') as regdate, 
                  hit 
                  FROM board
                  ORDER BY num DESC`;
    const arr = [];
    conn.query(sql, arr, (err, rows) => {
      if (err) {
        return next(err);
      };
      console.log(`rows=${rows}`);
      conn.release();
      // res.json({ "rows": rows }); express에서 제공하는 json 메소드를 사용하면 json으로 뿌려준다.
      var obj = {
        title: "list",
        rows: rows
      };
      res.render('list', obj);
    });
  });
});


router.get('/read/:num', (req, res, next) => {
// 링크에 변수를 사용하면 콜론과 변수명을 함께 사용한다.  :num
  let num = req.params.num;
  console.log("num=", num);
  pool.getConnection((err, conn) => {
    if (err) { return next(err) };
    let update_sql = "UPDATE board SET hit = hit + 1 WHERE num=?";
    let arr = [num];
    conn.query(update_sql, arr, (err, result) => {
      if (err) { return next(err) };
      console.log('result=', result);
      let sql = `SELECT 
                  num, 
                  subject, 
                  content, 
                  DATE_FORMAT(regdate, '%Y-%c-%d %T') as regdate, 
                  hit 
                  FROM board
                  WHERE num=?`;

      conn.query(sql, arr, (err, rows) => {
        if (err) { return next(err) };
        console.log(`rows=`, rows);
        conn.release();
        let obj = {
          title: "게시판 글 읽기",
          rows: rows[0]
        };
        res.render('read', obj);
      });
    });
  });
});

router.get('/updateform/:num', (req, res, next) => {
  let num = req.params.num;
  pool.getConnection((err, conn) => {
    if (err) { return next(err) };
    let sql = "SELECT * FROM board WHERE num=?";
    let arr = [num];
    conn.query(sql, arr, (err, rows) => {
      if (err) { return next(err) };
      console.log('rows=', rows);
      conn.release();
      let obj = {
        title: "게시판 수정",
        rows: rows[0]
      };
      res.render('updateform', obj);
    });
  });
});

router.post('/update', (req, res ,next) => {
  console.log(req.body);
  const num = req.body.num; 
  // ../views/./writeForm.ejs <input type="hidden" name="num"> 에서 받은 글번호 받기
  const writer = req.body.writer;
  const pwd = req.body.pwd;
  const subject = req.body.subject;
  const content = req.body.content;
  pool.getConnection((err, conn) => {
    if (err) { return next(err) };
    const sql = "UPDATE board SET writer=?, subject=?, content=? WHERE num=? AND pwd=?";
    const arr = [writer, subject, content, num, pwd];

    conn.query(sql, arr, (err, result) => {
      if (err) { return next(err) };
      console.log("results:", result);
      conn.release();
      if (result.affectedRows == 1 ) {
        res.redirect('/list');
      } else {
        res.send("<script>alert('비밀번호가 틀려서 되돌아갑니다');window.history.go(-3);</script>");
      }
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