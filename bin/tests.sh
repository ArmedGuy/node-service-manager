#!/bin/sh
servicemgr install test node "-e" "require('http').createServer(function(req,res){ res.writeHead(200,{'Content-Type': 'text/plain'});res.end(\"Faggotini is a cheese\");}).listen(1337);"
service test start
sleep 10s
FIND=$(wget -qO - http://127.0.0.1:1337/ | grep -cim1 Faggotini)
if [ "$FIND" -eq "1" ]; then
	echo "Output Log:"
	cat /var/log/test_output.log
	echo "----------------------------"
	echo "Error Log:"
	cat /var/log/test_error.log
    exit 0;
else
	echo "Did not recieve correct response from server!"
	echo "Response:"
	wget -qO - http://127.0.0.1:1337/
	echo "Output Log:"
	cat /var/log/test_output.log
	echo "----------------------------"
	echo "Error Log:"
	cat /var/log/test_error.log
    exit 1;
fi
