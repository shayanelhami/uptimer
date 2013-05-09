var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.end('Hello world!');
});


app.listen(8085);
console.log('listening on 8085');
