var express = require('express');
var app = express();

const DBurl  = (process.env.DATABASE_URL || 'no DB!!');
const port = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.send('Working! DB: ' + DBurl);
  res.end();
});

app.get('/favicon.ico', function (req, res) {
  res.writeHead(200, {'Content-Type': 'image/x-icon'} );
  res.end();
});
app.listen(port, function () {
  console.log('Event app listening on port: ' + port);
});
