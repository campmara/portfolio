'use strict';

var express = require('express'),
    app = express();

app.use(express.static('web'));

// app.get('/', function(req, res) {
//  res.send('ha');
// })

app.listen(3000);