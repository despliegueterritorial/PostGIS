var express = require('express');
var app = express();

const port = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.send('Working!');
});
app.listen(port, function () {
  console.log('Event app listening on port: ' + port);
});
