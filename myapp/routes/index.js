var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ios',function(req, res, next){
  res.render('index', { title: 'Express' });
  // res.end("<script>window.location.href = 'https://itunes.apple.com/app/id1112879717?mt=8';</script>")
});

router.get('/apple-app-site-association',function(req, res, next){
  res.end(fs.readFileSync('./well-known/apple-app-site-association'));
});

module.exports = router;
