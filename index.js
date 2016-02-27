var express = require('express');
var morgan = require("morgan");
var http = require("http");
var path = require("path");
var dot = require("dot");

var app = express();
var root = path.resolve(__dirname, ".");
var dots = dot.process({ path: path.join(root, "templates") });

app.set('port', (process.env.PORT || 5000));

app.use(morgan('dev'));
app.use('/assets', express.static(path.join(root, "assets")));
app.use('/assets', express.static(path.join(root, "assets", "images")));

app.get('/', function(req, res) {
  res.end(dots.Index());
});

app.get('/paleta', function(req, res) {
  res.end(dots.Paleta());
});

var httpServer = http.createServer(app);
httpServer.listen(app.get('port'), function() {
  console.log('HTTP Server listening on port %d', httpServer.address().port);
});
