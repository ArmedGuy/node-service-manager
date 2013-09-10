#!/bin/sh
servicemgr install test node "-e" "var http=require('http');http.createServer(function(req,res){ res.writeHead(200,{'Content-Type': 'text/plain'});res.end('Faggotini is a cheese\n');}).listen(1337);"
service test start