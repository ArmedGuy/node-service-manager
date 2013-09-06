var fs = require("fs");
var service = require('./node-linux-service');

svc = new service.Service({
	name: "test",
	displayname: "Test Server",
	description: "A test server",
	run: "node",
	args: ["/opt/shell-bridge/shell-bridge-server.js"]
});
svc.install();

file = fs.readFileSync("service-controller.js");
fs.writeFileSync("output.txt", new Buffer(file).toString('base64'));
console.log("Packed!");