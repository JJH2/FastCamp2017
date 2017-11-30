var express = require('express');
var router = express.Router();

/* GET home page. */
// http://localhost:5000/
router.get('/', function(req, res, next) {
  var json = { title: 'express', jang: 'jhjh' };
  res.render('index.ejs', json);
});

router.get('/aa', (req, res, next) => {
  res.render("여기는 /abc 입니다!");
});

module.exports = router;