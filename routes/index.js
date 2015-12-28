var express = require('express');
var request = require('request');
var router = express.Router();
var fs = require ('fs');

var mongoose = require('mongoose');
var Patron = mongoose.model('Patron');
var Transaction = mongoose.model('Transaction');
var Settings = mongoose.model('Settings');

router.get('/', function(req, res) {
  res.render('index', {title: 'tabMinder'});
});

router.get('/patrons', function(req, res, next) {
  Patron.find(function(err, patrons){
    if (err) {return next(err);}
    res.json(patrons);
  });
});

router.post('/patrons', function(req, res, next) {
  var patron = new Patron(req.body);
  patron.save(function(err, patron){
    if (err) {return next(err);}
    res.json(patron);
  });
});

module.exports = router;
