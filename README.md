# node-service-manager
[![Build Status](https://travis-ci.org/ArmedGuy/node-service-manager.png?branch=master)](https://travis-ci.org/ArmedGuy/node-service-manager)

A Linux(and soon Windows) Service Manager for node.js


## How to use
Services can be installed in two ways
* Via node.js code using the node-service class
* Via servicemgr that comes with the package(when using npm install)



### Via code
```node
var service = require('service-manager');
var svc = new service.Service({
  name: "test",
  displayname: "Test Server",
  description: "This is a test server!",
  run: "node",
  args: ["/root/test-server.js"]
});

// To install the service
svc.install();

// To uninstall the service
svc.uninstall();
```

### Via the command-line
```bash
servicemgr install test node /root/test-server.js

servicemgr uninstall test
```
