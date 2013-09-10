#!/bin/sh
servicemgr install test node "-e" "var http=require('http');http.createServer(function(req,res){ res.writeHead(200,{'Content-Type': 'text/plain'});res.end(\"Faggotini is a cheese\");}).listen(1337);"
service test start
if wget -qO - http://pie-studios.com | grep -cim1 Faggotini -eq "1"; then
	exit 0;
else
	exit 1;
fi;