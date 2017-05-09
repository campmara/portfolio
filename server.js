'use strict';

var express = require('express'),
  app = express(),
  port = process.env.port || 80;

app.use(express.static('web'));

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

console.log(port);
app.listen(port);