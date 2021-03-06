var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var index_buf = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(index_buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
