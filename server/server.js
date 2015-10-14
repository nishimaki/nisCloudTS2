/// <reference path='./tsd.d.ts' />
var PORT = process.env.PORT || 8080;
var express = require('express');
var http = require('http');
var path = require('path');
exports.app = express();
exports.app.use(express.static(__dirname + '/../public'));
//app.use(express.bodyParser())
var server = http.createServer(exports.app);
server.listen(PORT);
console.log("RUNNING " + PORT);
