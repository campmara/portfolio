'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 80;

app.use(express.static('web'));

console.log(port);
app.listen(port);