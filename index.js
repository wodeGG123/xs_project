var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./'));
app.set('views', './');
app.engine('.html',require('ejs').__express);
app.get('/', function(req, res) {
    res.render('./index.html');
  });
  var server = app.listen(80, function () {  
    console.log('Example app listening on port 80!');  
  });  