// npm includes
var fs = require('fs');
var express = require('express');
var routes = require('./routes');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');

// local includes
var Db = require('./lib/db.js');
var dataModel = JSON.parse(fs.readFileSync('./data/model.json', 'utf-8'));

// var declarations
var url = 'mongodb://localhost:27017/tabMinder';

// app setup
var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);

// configure express app
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
 
app.get('/', require('./routes/index'));

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   Db.insertDocument(db, dataModel.settings, function(){
//     db.close();
//   });
// });

io.on('connection', function(socket){
  console.log('a client has connected');
});
 
console.log("Express server listening on port 3000");
