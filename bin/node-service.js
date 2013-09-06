#!/usr/bin/node
var service = require(__dirname + "../lib/node-service");
var i = 0;
var settings = {
	name: "",
	run: "/dev/null"
}
var action = "";
process.argv.forEach(function(arg) {
	if(i == 2) {
		action = arg;
	}
	if(i == 3) {
		settings.name = arg;
	}
	if(i == 4) {
		settings.run = arg;
	}
	if(i > 5) {
		settings.args.push(arg);
	}
	i++;
});
var svc = new service.Service(settings);
switch(action) {
	case "install":
		svc.install();
		break;
	case "uninstall":
		svc.uninstall();
		break;
}