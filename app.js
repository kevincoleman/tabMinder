// npm includes

var mongoose = require('mongoose');
require('./models/Patrons.js');
require('./models/Transactions.js');
require('./models/Settings.js');

var fs = require('fs');
var bodyParser = require('body-parser');
var sass = require('node-sass');
var express = require('express');
var routes = require('./routes');
var ObjectId = require('mongodb').ObjectId;

// app setup
var app = express();
var server = app.listen(3000);
// var io = require('socket.io').listen(server);

// configure express app
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('*', routes);
app.post('*', routes);
app.put('*', routes);

// compile scss to css
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

mongoose.connect('mongodb://localhost/tabMinder', function(err){
    if (err){
      console.log(err);
    } else {
      console.log('Connected to Database')}
    });

// io.on('connection', function(socket){
//   console.log('a client has connected');
// });
 
console.log("Express server listening on port 3000");
