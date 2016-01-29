'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 80;

var cleanUrls = require('clean-urls');

app.use(cleanUrls(['/web/index.html']));
//app.use(express.static('web'));

console.log(port);
app.listen(port);