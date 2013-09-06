﻿var INSTALL_FILE = "IyEvdXNyL2Jpbi9ub2RlCiMKIyB7bmFtZX0ge3N1bW1hcnl9CiMKIyBjaGtjb25maWc6IAojIGRlc2NyaXB0aW9uOiB7ZGVzY3JpcHRpb259IAojCiMKCnZhciBzcGF3biA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5zcGF3bjsKdmFyIGV4ZWMgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYzsKdmFyIHN5cyA9IHJlcXVpcmUoJ3V0aWwnKTsKdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsKCnZhciBkZXZudWxsb3V0ID0gZnMub3BlblN5bmMoIi9kZXYvbnVsbCIsICJhIik7CnZhciBkZXZudWxsZXJyID0gZnMub3BlblN5bmMoIi9kZXYvbnVsbCIsICJhIik7CgpTRVJWSUNFX05BTUUgPSAie25hbWV9IjsKU0VSVklDRV9ESVNQTEFZID0gIntkaXNwbGF5fSI7ClJVTl9GSUxFID0gIntydW59IjsKQVJHUyA9IFt7YXJnc31dOwpQSURfRklMRSA9ICIvdmFyL3J1bi8iICsgU0VSVklDRV9OQU1FICsgIi5waWQiOwoKZnVuY3Rpb24gaXNfcnVubmluZyhwaWQsIGNhbGxiYWNrKSB7CglleGVjKCJraWxsIC0wICIgKyBwaWQsIGZ1bmN0aW9uKGVyciwgc3Rkb3V0LCBzdGRlcnIpIHsKCQljYWxsYmFjayhzdGRlcnIgPT0gIiIpOwoJfSk7Cn0KCgoKZnVuY3Rpb24gZG9zdGFydCgpIHsKCWNvbnNvbGUubG9nKCJTdGFydGluZyAiICsgU0VSVklDRV9ESVNQTEFZICsgIjogIik7Cgl2YXIgcHJvYyA9IHNwYXduKFJVTl9GSUxFLCBBUkdTLCB7CgkJZGV0YWNoZWQ6IHRydWUsCgkJc3RkaW86IFsgJ2lnbm9yZScsIGRldm51bGxvdXQsIGRldm51bGxlcnIgXQoJfSk7Cgljb25zb2xlLmxvZygiRG9uZS4uLiIpOwoJZnMud3JpdGVGaWxlU3luYyhQSURfRklMRSwgIiIgKyBwcm9jLnBpZCk7Cglwcm9jLnVucmVmKCk7Cn0KZnVuY3Rpb24gc3RhcnQoKSB7CglpZihmcy5leGlzdHNTeW5jKFBJRF9GSUxFKSkgewoJCWlzX3J1bm5pbmcoZnMucmVhZEZpbGVTeW5jKFBJRF9GSUxFKSwgZnVuY3Rpb24ocnVuKSB7CgkJCWlmKHJ1biA9PSB0cnVlKSB7CgkJCQljb25zb2xlLmxvZyhTRVJWSUNFX05BTUUgKyAiIGlzIGFscmVhZHkgcnVubmluZyEiKTsKCQkJfSBlbHNlIHsKCQkJCWRvc3RhcnQoKTsKCQkJfQoJCX0pOwoJfSBlbHNlIHsKCQlkb3N0YXJ0KCk7Cgl9Cn0KZnVuY3Rpb24gc3RvcCgpIHsKCWNvbnNvbGUubG9nKCJTdG9wcGluZyAiICsgU0VSVklDRV9ESVNQTEFZICsgIjogIik7Cgl0cnkgewoJCXZhciBwaWQgPSBmcy5yZWFkRmlsZVN5bmMoUElEX0ZJTEUpOwoJCXByb2Nlc3Mua2lsbChwaWQpOwoJCWNvbnNvbGUubG9nKCJEb25lLi4uIik7Cgl9IGNhdGNoKGUpIHsKCQlpZihlLmNvZGUgPT0gJ0VOT0VOVCcpIHsKCQkJY29uc29sZS5sb2coIlBJRCBmaWxlIG5vdCBmb3VuZCEiKTsKCQl9IGVsc2UgewoJCQl0aHJvdyBlOwoJCX0KCX0KfQpmdW5jdGlvbiByZXN0YXJ0KCkgewoJc3RvcCgpOwoJc3RhcnQoKTsKfQpmdW5jdGlvbiByZWxvYWQoKSB7Cn0KZnVuY3Rpb24gc3RhdHVzKCkgewp9CgoKaWYocHJvY2Vzcy5hcmd2Lmxlbmd0aCAhPSAzKSB7Cgljb25zb2xlLmxvZygiVXNhZ2U6ICIgKyBTRVJWSUNFX05BTUUgKyAiIChzdGFydHxzdG9wfHJlc3RhcnR8cmVsb2FkfHN0YXR1cykiKTsKfSBlbHNlIHsKCXN3aXRjaChwcm9jZXNzLmFyZ3ZbMl0pIHsKCQljYXNlICJzdGFydCI6CgkJCXN0YXJ0KCk7CgkJCWJyZWFrOwoJCWNhc2UgInN0b3AiOgoJCQlzdG9wKCk7CgkJCWJyZWFrOwoJCWNhc2UgInJlc3RhcnQiOgoJCQlyZXN0YXJ0KCk7CgkJCWJyZWFrOwoJCWNhc2UgInJlbG9hZCI6CgkJCXJlbG9hZCgpOwoJCQlicmVhazsKCQljYXNlICJzdGF0dXMiOgoJCQlyZWxvYWQoKTsKCQkJYnJlYWs7Cgl9Cn0K";
function service(settings) {
	if("name" in settings && "run" in settings) {
		this.settings = settings;
	} else {
		console.log("Error: Invalid service! Missing name or run in settings!");
	}
}
service.prototype.install = function() {
	replace_table = {
		"{name}": this.settings.name,
		"{run}": this.settings.run,
		"{display}": this.settings.displayname ? this.settings.displayname : this.settings.name
		"{description}": this.settings.description ? this.settings.description : "",
		"{args}": this.settings.args ? "\"" + this.settings.args.join("\",\") + "\"" : "",
		
	console.log("Installing " + this.settings.name);
	str = new Buffer(INSTALL_FILE, 'base64').toString();
	replace_table.forEach(function(val, key) {
		str = str.replace(key, val);
	});
	fs.writeFileSync("/etc/init.d/" + this.settings.name, str);
	console.log(this.settings.name + " successfully installed!");
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