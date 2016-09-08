var express = require( 'express' );
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false });

//spin up server
app.listen( '8080', 'localhost', function(){
  console.log( 'server listening on port 8080' );
}); //end app.listen

//base url
app.get('/', function(req, res){
  console.log('base URL hit');
  res.sendFile(path.resolve('public/index.html'));
});

//post URL for AJAX call, recieves info from client
//requires bodyParser's urlencodedParser
app.post('/texter',urlencodedParser, function(req, res){
  console.log('texter hit', req.body);
  res.send('you sent a ' + req.body.creature + ' that ' + req.body.noise + 's!');
});

//use public as static resource
app.use(express.static('public'));
