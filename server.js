var express = require('express');
var engines = require('consolidate');

var app = express();

app.set('views', __dirname + '/client');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/client'));

app.get('*', function(req, res) {
    res.render('index.html');
});


var port = 3030;
app.listen(port);
console.log('server started...');