# node-service-manager
[![Build Status](https://travis-ci.org/ArmedGuy/node-service-manager.png?branch=master)](https://travis-ci.org/ArmedGuy/node-service-manager)

A Linux(and soon Windows) Service Manager for node.js


## How to use
Services can be managed in two ways
* Via node.js code using the node-service class
* Via servicemgr that comes with the package(when using npm install -g)



### Creating a new service via node.js
```node
var service = require('service-manager');
var svc = new service.Service({
  name: "test", // sets the name of the service(will be used in service *name* start in Linux for example)
  displayname: "Test Server", // sets a displayname for the service, defaults to *name*
  description: "This is a test server!", // sets a description for the service
  run: "node", // sets what file to run
  args: ["/root/test-server.js"], // sets file arguments
  output: true, // sets wheter log to console
  log: false // sets wheter linux services should log stdout and stderr
});
```

#### install(callback) or installSync()

Requires atleast *name* and *run* in settings
```node

svc.install(function(isInstalled) {
});

if(svc.installSync()) {
}
```

#### uninstall(callback) or uninstallSync()

Requires atleast *name* in settings
```node

svc.uninstall(function(isUninstalled) {
});

if(svc.uninstallSync() {
}
```
#### start(), stop() and restart()
TODO


### Via the command-line
```bash
servicemgr install test node /root/test-server.js

servicemgr uninstall test
```
