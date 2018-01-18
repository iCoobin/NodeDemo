var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/apple-app-site-association', function(req, res, next){
  res.end(fs.readFileSync('./bin/apple-app-site-association'));
});

module.exports = router;
