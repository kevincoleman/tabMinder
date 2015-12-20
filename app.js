var express = require('express');
var routes = require('./routes');
 
var app = express();
var server = app.listen(3000);
var io = require('socket.io').listen(server);

  // configure express app
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/public'));
 
app.get('/', require('./routes/index'));

io.on('connection', function(socket){
  console.log('a client has connected');
  io.emit('hi');
})
 
console.log("Express server listening on port 3000");
