var express = require('express');
var user = require('./routes/user');

var app = new express();

app.use('/user', user);

var server = app.listen(3000);
