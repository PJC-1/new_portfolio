var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile('views/index.html', {root: __dirname});
});

app.listen(process.env.PORT || 3000, function(){
  console.log('now listening to smooth sounds of port 3000...');
});
