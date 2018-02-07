var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.end("<a href='https://ios.ejufu.cn'>jump to ejufu</a><Br/><Br/><a href='ejufu://Action'>jump to ejufu2</a>");

});

router.get('/ios',function(req, res, next){
  res.render('index', { title: 'Express' });
  // res.end("<script>window.location.href = 'https://itunes.apple.com/app/id1112879717?mt=8';</script>")
});

router.get('/apple-app-site-association',function(req, res, next){
  //res.writeHead(200, {'Content-Type': 'application / pkcs7-mime'});
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(fs.readFileSync('./well-known/apple-app-site-association'));
});

module.exports = router;
