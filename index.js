var express = require('express');
var http = require("http");
var path = require("path");
var dot = require("dot");

var app = express();
var root = path.resolve(__dirname, ".");
var dots = dot.process({ path: path.join(root, "templates") });

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  var body = dots.Index({ title: "Node App with doT" });
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Content-Length", Buffer.byteLength(body));
  response.writeHead(500);
  response.end(body);
});

var httpServer = http.createServer(app);
httpServer.listen(app.get('port'), function() {
  console.log('HTTP Server listening on port %d', httpServer.address().port);
});
