var express = require('express');
var request = require('request');
var router = express.Router();
var sass = require('node-sass');
var fs = require ('fs');

router.get('/', function(req, res) {
  sass.render({
    file: './views/style.scss',
    outFile: './public/css/style.css'
  }, function(err, result){
    if (!err) {
      fs.writeFile('./public/css/style.css', result.css, function(){
        if (err) {throw err;}
      });
    } else {throw err;}
  });
  res.render('index', {title: 'tabMinder'});
});

module.exports = router;
