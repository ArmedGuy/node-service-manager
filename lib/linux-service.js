var fs = require('fs');
var exec = require('child_process').exec;
raw_file = fs.readFileSync(__dirname + "/linux-service-controller.js");
function linuxservice(settings) {
	this.settings = settings;
}
linuxservice.prototype.meets = function(requires, action) {
	for(k in requires) {
		if(requires[k] in this.settings) { 
		} else {
			console.log(" * Error: Could not perform action \"" + action + "\", missing " + requires[k] + " in service information!");
			return false;
		}
	}
	return true;
}
linuxservice.prototype.install = function(callback) {
	self = this;
	if(self.meets(["name", "run"], "install")) {
		fs.exists("/etc/init.d/" + self.settings.name, function(exists) {
			if(!exists) {
				if("args" in self.settings) {
					for(var key in self.settings.args) {
						self.settings.args[key] = self.settings.args[key].replace(/"/g, "\\\"");
					}
				}
				replace_table = [
					[/{name}/gi, self.settings.name],
					[/{run}/gi, self.settings.run],
					[/{display}/gi, self.settings.displayname ? self.settings.displayname : self.settings.name],
					[/{description}/gi, self.settings.description ? self.settings.description : ""],
					[/{args}/gi, self.settings.args ? "\"" + self.settings.args.join("\",\"") + "\"" : ""],
					[/{log}/gi, self.settings.log ? (self.settings.log == true ? "true" : "false") : "true"]
				];
				self.settings.output && console.log("Installing " + self.settings.name + " as a service...");
				str = new Buffer(raw_file).toString();
				replace_table.forEach(function(val) {
					str = str.replace(val[0],val[1]);
				});
				fs.writeFile("/etc/init.d/" + self.settings.name, str, function(err) {
					if(err) throw err;
					fs.chmod("/etc/init.d/" + self.settings.name, 0755, function() {
						self.settings.output && console.log(self.settings.name + " successfully installed!");
						
						// TODO: add to rc
						callback && callback(true);
					});
				});
			} else {
				self.settings.output && console.log("A service with the name " + self.settings.name + " was already found!");
				self.settings.output && console.log("Aborting installation...");
				callback && callback(false);
			}
		});
	}
}
linuxservice.prototype.installSync = function() {
	self = this;
	if(this.meets(["name", "run"], "installSync")) {
		if(fs.exists("/etc/init.d/" + self.settings.name)) {
			if("args" in self.settings) {
				for(var key in self.settings.args) {
					self.settings.args[key] = self.settings.args[key].replace(/"/g, "\\\"");
				}
			}
			replace_table = [
				[/{name}/gi, self.settings.name],
				[/{run}/gi, self.settings.run],
				[/{display}/gi, self.settings.displayname ? self.settings.displayname : self.settings.name],
				[/{description}/gi, self.settings.description ? self.settings.description : ""],
				[/{args}/gi, self.settings.args ? "\"" + self.settings.args.join("\",\"") + "\"" : ""],
				[/{log}/gi, self.settings.log ? (self.settings.log == true ? "true" : "false") : "true"]
			];
			self.settings.output && console.log("Installing " + self.settings.name + " as a service...");
			str = new Buffer(raw_file).toString();
			replace_table.forEach(function(val) {
				str = str.replace(val[0],val[1]);
			});
			fs.writeFileSync("/etc/init.d/" + self.settings.name, str);
			fs.chmodSync("/etc/init.d/" + self.settings.name, 0755);
			self.settings.output && console.log(self.settings.name + " successfully installed!");
				
			// TODO: add to rc
		} else {
			self.settings.output && console.log("A service with the name " + self.settings.name + " was already found!");
			self.settings.output && console.log("Aborting installation...");
		}
	}
}
linuxservice.prototype.uninstall = function(callback) {
	self = this;
	if(self.meets(["name"], "uninstall")) {
		fs.exists("/etc/init.d/" + self.settings.name, function(exists) {
			if(exists) {
				//TODO: remove from rc
				fs.unlink("/etc/init.d/" + self.settings.name, function() {
					self.settings.output && console.log(self.settings.name + " successfully uninstalled!");
					callback && callback(true);
				});
			} else {
				self.settings.output && console.log(self.settings.name + " was not found as a service!");
				callback && callback(false);
			}
		});
	}
}
linuxservice.prototype.uninstallSync = function() {
	self = this;
	if(self.meets(["name"], "uninstallSync")) {
		if(fs.exists("/etc/init.d/" + self.settings.name)) {
			//TODO: remove from rc
			fs.unlink("/etc/init.d/" + self.settings.name);
			self.settings.output && console.log(self.settings.name + " successfully uninstalled!");
		} else {
			self.settings.output && console.log(self.settings.name + " was not found as a service!");
		}
	}
}

linuxservice.prototype.start = function() {
	exec("/etc/init.d/" + this.settings.name + " start", function(err, stdout, stderr) {
	});
}

linuxservice.prototype.stop = function() {
	exec("/etc/init.d/" + this.settings.name + " stop", function(err, stdout, stderr) {
	});
}
exports.LinuxService = linuxservice;