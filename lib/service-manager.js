﻿var fs = require('fs');
var raw_file = "";
raw_file = fs.readFileSync(__dirname + "/linux-service-controller.js");
function service(settings) {
	if("name" in settings && "run" in settings) {
		this.settings = settings;
	} else {
		console.log("Error: Invalid service! Missing name or run in settings!");
		return;
	}
}
service.prototype.install = function() {
	if(!fs.existsSync("/etc/init.d/" + this.settings.name)) {
		replace_table = [
			[/{name}/gi, this.settings.name],
			[/{run}/gi, this.settings.run],
			[/{display}/gi, this.settings.displayname ? this.settings.displayname : this.settings.name],
			[/{description}/gi, this.settings.description ? this.settings.description : ""],
			[/{args}/gi, this.settings.args ? "\"" + this.settings.args.join("\",\"") + "\"" : ""]
		]
		console.log("Installing " + this.settings.name + " as a service...");
		str = new Buffer(raw_file).toString();
		replace_table.forEach(function(val) {
			str = str.replace(val[0],val[1]);
		});
		fs.writeFileSync("/etc/init.d/" + this.settings.name, str);
		fs.chmodSync("/etc/init.d/" + this.settings.name, 0755);
		console.log(this.settings.name + " successfully installed!");
	} else {
		console.log("A service with the name " + this.settings.name + " was already found!");
		console.log("Aborting installation...");
	}
}
service.prototype.uninstall = function() {
	if(fs.existsSync("/etc/init.d/" + this.settings.name)) {
		fs.unlinkSync("/etc/init.d/" + this.settings.name);
		console.log(this.settings.name + " successfully uninstalled!");
	} else {
		console.log(this.settings.name + " was not found as a service!");
	}
}
exports.Service = service;