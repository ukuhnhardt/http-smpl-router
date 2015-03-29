Simple HTTP Router
====================

A simple router for node.js [http](https://nodejs.org/api/http.html) module. Register routes express.js style and delegate HTTP requests directly to the router.

## Installation

npm install http-smpl-router

## Usage

Register GET, POST, PUT, DELETE routes

```
var router = require('http-smpl-router');

http.createServer(function(req, resp){
  router.route(req, resp);
}).listen(3000);

router.get('/helloworld', function(req, resp){
    resp.end("<h1>Hello</h1>" + "World!!");
});
```

In your browser view ```http://localhost:3000/helloworld```
