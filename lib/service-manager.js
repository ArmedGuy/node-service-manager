var os = require('os');
var lnx = require('./linux-service');
function service(settings) {
	switch(os.platform()) {
		//case "win32".
		//	break;
		case "linux":
			this._service = new lnx.LinuxService(settings);
			break;
		default:
			throw new Error("Operating system not supported! OS: " + os.platform());
			break;
	}
	this.settings = settings;
	
}
service.prototype.install = function() {
	if(this._service)
		this._service.install();
}


service.prototype.uninstall = function() {
	if(this._service)
		this._service.uninstall();
}

service.prototype.start = function() {
	if(this._service)
		this._service.start();
}
service.prototype.stop = function() {
	if(this._service)
		this._service.stop();
}
service.prototype.restart = function() {
	this.stop();
	this.start();
}
exports.Service = service;