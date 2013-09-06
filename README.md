# node-service
[![Build Status](https://travis-ci.org/ArmedGuy/node-service.png?branch=master)](https://travis-ci.org/ArmedGuy/node-service)

A Linux(and soon Windows) Service Manager for node.js


## How to use
Services can be installed in two ways
* Via node.js code using the node-service class
* Via node-service that comes with the package(when using npm install)



### Via code
```node
var service = require('node-service');
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
node-service install test node /root/test-server.js

node-service uninstall test
```
