var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

//get and connect to db
var dbUrl = 'mongodb://admin:admin@ds062097.mongolab.com:62097/resource-sharer-statistics';
var collections = null; //if only some collections are needed
var mongoose = require('mongoose');
mongoose.connect(dbUrl);

//set up db context
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback() {
    var DeviceInfoSchema = mongoose.Schema({
        "deviceID": String,
        "deviceData": JSON,
        "acceptance": Boolean
    });
    DeviceInfoSchema.methods.speak = function () {
        var deviceID = this.deviceID
                ? "Allright i have it " + this.deviceID
                : "No ID"
            ;
        console.log(deviceID);
    };
    var DeviceInfo = mongoose.model('DeviceInfo', DeviceInfoSchema);
    var genTest = new DeviceInfo({
        deviceID : '1337',
        deviceData: 'Keepo',
        acceptance: false
    });

    //console.log(genTest.deviceData);
   /*genTest.save(function (err, genTest){
        if (err) return console.error(err);
        //genTest.speak();
    });

    DeviceInfo.find(function (err, devices) {
        if (err) return console.error(err);
        console.log(devices);
    });*/
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('title', 'ResourceSharer gathering');

app.get('/', function(request, response) {
    response.send(cool() + <h3> + 'Get out of here. This is a database server ' + cool());
});

app.get('/dbUrl', function(request, response){
    response.send(dbUrl);
});

app.get('/recieveData', function(request, response){
    response.send("WOW");
});
//request must be a json string
app.post('/recieveData', function(request, response){
    request.on('end', function(){
        var object = JSON.parse(request);
        object.save(function (err, object){
            if (err) return console.error(err);
        });
    });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
