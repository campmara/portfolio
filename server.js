'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('web'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

/*
app.get('/games', function(req,res){
 res.sendfile(__dirname + '/web/games.html');
}); 

app.get('/music', function(req,res){
 res.sendfile(__dirname + '/web/music.html');
}); 

app.get('/writing', function(req,res){
 res.sendfile(__dirname + '/web/writing.html');
}); 
*/