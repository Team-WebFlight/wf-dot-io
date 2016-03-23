'use strict';
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('WebFlight.io listening on 3000');
});
