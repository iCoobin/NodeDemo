var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ios',function(req, res, next){
  res.render('index', { title: 'Express' });
});

module.exports = router;
