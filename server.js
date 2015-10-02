'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 80;

app.use(express.static('web'));

// app.get('/', function(req, res) {
//  res.send('ha');
// })

console.log(port);
app.listen(port);