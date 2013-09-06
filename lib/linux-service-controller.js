#!/usr/bin/env node
//#
//# {name} {summary}
//#
//# chkconfig: 
//# description: {description} 
//#
//#

var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var sys = require('util');
var fs = require('fs');

var devnullout = fs.openSync("/dev/null", "a");
var devnullerr = fs.openSync("/dev/null", "a");

SERVICE_NAME = "{name}";
SERVICE_DISPLAY = "{display}";
RUN_FILE = "{run}";
ARGS = [{args}];
PID_FILE = "/var/run/" + SERVICE_NAME + ".pid";

function is_running(pid, callback) {
	exec("kill -0 " + pid, function(err, stdout, stderr) {
		callback(stderr == "");
	});
}



function dostart() {
	console.log("Starting " + SERVICE_DISPLAY + ": ");
	var proc = spawn(RUN_FILE, ARGS, {
		detached: true,
		stdio: [ 'ignore', devnullout, devnullerr ]
	});
	console.log("Done...");
	fs.writeFileSync(PID_FILE, "" + proc.pid);
	proc.unref();
}
function start() {
	if(fs.existsSync(PID_FILE)) {
		is_running(fs.readFileSync(PID_FILE), function(run) {
			if(run == true) {
				console.log(SERVICE_NAME + " is already running!");
			} else {
				dostart();
			}
		});
	} else {
		dostart();
	}
}
function stop() {
	console.log("Stopping " + SERVICE_DISPLAY + ": ");
	try {
		var pid = fs.readFileSync(PID_FILE);
		process.kill(pid);
		console.log("Done...");
	} catch(e) {
		if(e.code == 'ENOENT') {
			console.log("PID file not found!");
		} else {
			throw e;
		}
	}
}
function restart() {
	stop();
	start();
}
function reload() {
}
function status() {
}


if(process.argv.length != 3) {
	console.log("Usage: " + SERVICE_NAME + " (start|stop|restart|reload|status)");
} else {
	switch(process.argv[2]) {
		case "start":
			start();
			break;
		case "stop":
			stop();
			break;
		case "restart":
			restart();
			break;
		case "reload":
			reload();
			break;
		case "status":
			reload();
			break;
	}
}
