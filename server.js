var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.bodyParser());

var FILE_NAME = './uptime.txt';

app.get('/', function(req, res){
  fs.readFile(FILE_NAME, 'utf8', function(err, data) {
	  if (err) {
			console.log(err);
			res.send(err);
		} else {
			res.send('Uptime:'+ data);
		}
	});
});

app.post('/save', function (req, res) {
    var post = req.body;
	console.log(post.uptime);
	
	fs.writeFile(FILE_NAME, post.uptime, function(err) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			res.send('OK!\n');
		}
	}); 

});
	
app.listen(8085);
console.log('listening on 8085');
