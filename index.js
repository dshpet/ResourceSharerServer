var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

//get and connect to db
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds062097.mongolab.com:62097/resource-sharer-statistics');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
