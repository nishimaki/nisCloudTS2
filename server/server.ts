/// <reference path='./tsd.d.ts' />

var PORT = process.env.PORT || 8080
import express = require('express')
import http = require('http')
var path = require('path') 

export var app = express()

app.use(express.static(__dirname + '/../public'))
//app.use(express.bodyParser())

var server = http.createServer(app)
server.listen(PORT)
console.log("RUNNING " + PORT)
