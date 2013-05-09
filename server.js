var express = require('express');

var app = express();
app.use(express.bodyParser());

app.get('/', function(req, res){
  res.send('Hello world!');
});

app.post('/save', function (req, res) {
    var post = req.body;
	console.log(post.uptime);
	res.send('OK!');
});
	
app.listen(8085);
console.log('listening on 8085');
