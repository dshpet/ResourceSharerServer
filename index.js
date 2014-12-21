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


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('title', 'ResourceSharer gathering');


app.get('/', function(request, response) {
    response.send(cool() + '  Get out of here. This is a database server  ' + cool());
});

/*
//db connection part
app.get('/dbUrl', function(request, response){
    response.send(dbUrl);
});
*/
//app.get('/dbUrl', routeDbUrl.getUrl(request, response));
app.use('/dbLoc', routeDbUrl);

//var dataReceiver = require('./modules/dataReceiver.js');
app.get('/recieveData', function(request, response){

    /*var partedObject = "";

     request.on('data', function(data){
     partedObject += data;
     });*/

    response.send("Place to send data");
});
//request must be a json string
app.post('/recieveData', function(request, response){
    var object = null;
    var partedObject = "";

    response.send("JUST SOME RESPONSE TEXT");

    request.on('data', function(data){
        partedObject += data;
    });

    request.on('end', function(){
        console.log("POST method on end : " + request);

        //object = JSON.parse(request);

        var b = request.body;
        var h = request.headers;
        console.log("body : " + b);

        //response.send("Received request: " + request + " parsed object: " + object + "\n Parted string received: " + partedObject);
        //response.send("Parted string received: " + partedObject);
        response.json({"json" : "test"});

        /*object.save(function (err, object){
         if (err) return console.error(err);
         });*/
    });

    request.on('error', function (e) {
        response.send("Error occurred" + e);
    });
});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
