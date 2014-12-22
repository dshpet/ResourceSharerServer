//nodetime resource monitor
if(process.env.NODETIME_ACCOUNT_KEY) {
    require('nodetime').profile({
        accountKey: process.env.NODETIME_ACCOUNT_KEY,
        appName: 'ResourceSharerServer' // optional
    });
}

var express = require('express');
var app = express();
var middleware = require('./middleware')(app, express);
var cool = require('cool-ascii-faces');

//routes
//var routes = require('./modules')(app);
var routeDbUrl = require('./modules/dbUrl');
var routeIndex = require('./modules/index');
var routeDataReceiver = require('./modules/dataReceiver');
var routeTasks = require('./modules/tasks');


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('title', 'ResourceSharer gathering');


app.use('/', routeIndex);
app.use('/dbLoc', routeDbUrl);
app.use('/recieveData', routeDataReceiver);
app.use('/tasks', routeTasks);


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});