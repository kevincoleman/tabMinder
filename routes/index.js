var express = require('express');
var request = require('request');
var router = express.Router();
var fs = require ('fs');

var mongoose = require('mongoose');
var Patron = mongoose.model('Patron');
var Transaction = mongoose.model('Transaction');
var Settings = mongoose.model('Settings');

// base view
router.get('/', function(req, res) {
  res.render('index', {title: 'tabMinder'});
});

// patrons: search for one by id
router.param('patronId', function(req, res, next, id){
  var query = Patron.findById(id);
  query.exec(function(err, patron){
    if (err) {return next(err);}
    if (!patron) {return next(new Error('can’t find patron'));}
    req.patron = patron;
    return next();
  });
});

// patrons: return json of all patrons
router.get('/patrons', function(req, res, next) {
  Patron.find(function(err, patrons){
    if (err) {return next(err);}
    res.json(patrons);
  });
});

// patrons: return single patron attached to req
router.get('/patrons/:patronId', function(req, res){
  res.json(req.patron);
});

// patrons: add a new patron
router.post('/patrons', function(req, res, next) {
  var patron = new Patron(req.body);
  patron.save(function(err, patron){
    if (err) {return next(err);}
    res.json(patron);
  });
});

// add a transaction to a patron’s record
router.put('/patrons/:patron/addTransaction', function(req, res, next){
  req.patron.addTransaction(transaction, function(err, patron){
    if (err) {return next(err)};
    res.json(patron);
  });
});

// transactions
router.get('/transactions', function(req, res, next) {
  Transaction.find(function(err, transactions){
    if (err) {return next(err);}
    res.json(transactions)
  });
});

router.post('/transactions', function(req, res, next){
  
});

module.exports = router;
