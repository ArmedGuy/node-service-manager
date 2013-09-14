var fs = require('fs');
var exec = require('child_process').exec;
raw_file = fs.readFileSync(__dirname + "/linux-service-controller.js");
function linuxservice(settings) {
	this.settings = settings;
}
service.prototype.meets = function(requires, action) {
	for(k in requires) {
		if(requires[k] in this.settings) { 
		} else {
			console.log(" * Error: Could not perform action \"" + action + "\", missing " + requires[k] + " in service information!");
			return false;
		}
	}
}
linuxservice.prototype.install = function() {
	if(this.meets(["name", "run"])) {
		fs.exists("/etc/init.d/" + this.settings.name, function(exists) {
			if(!exists) {
				if(this.settings.args) {
					for(var key in this.settings.args) {
						this.settings.args[key] = this.settings.args[key].replace(/"/g, "\\\"");
					}
				}
				replace_table = [
					[/{name}/gi, this.settings.name],
					[/{run}/gi, this.settings.run],
					[/{display}/gi, this.settings.displayname ? this.settings.displayname : this.settings.name],
					[/{description}/gi, this.settings.description ? this.settings.description : ""],
					[/{args}/gi, this.settings.args ? "\"" + this.settings.args.join("\",\"") + "\"" : ""],
					[/{log}/gi, this.settings.log ? (this.settings.log == true ? "true" : "false") : "false"
				]
				console.log("Installing " + this.settings.name + " as a service...");
				str = new Buffer(raw_file).toString();
				replace_table.forEach(function(val) {
					str = str.replace(val[0],val[1]);
				});
				fs.writeFile("/etc/init.d/" + this.settings.name, str, function(err) {
					if(err) throw err;
					fs.chmod("/etc/init.d/" + this.settings.name, 0755, function() {
						console.log(this.settings.name + " successfully installed!");
						
						// TODO: add to rc
					});
				});
			} else {
				console.log("A service with the name " + this.settings.name + " was already found!");
				console.log("Aborting installation...");
			}
		});
	}
}
linuxservice.prototype.uninstall = function() {
	fs.exists("/etc/init.d/" + this.settings.name, function(exists) {
		if(exists) {
			//TODO: remove from rc
			fs.unlink("/etc/init.d/" + this.settings.name, function() {
				console.log(this.settings.name + " successfully uninstalled!");
			});
		} else {
			console.log(this.settings.name + " was not found as a service!");
		}
	});
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