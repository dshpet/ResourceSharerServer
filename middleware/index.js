module.exports = function (app, express) {

    var databaseManager = require('./databaseManager');
//get and connect to db

    //var collections = null; //if only some collections are needed
    //var mongoose = require('mongoose');
    //mongoose.connect(dbUrl);

    databaseManager.connect();

//set up db context

    var db = databaseManager.connection;
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
            deviceID: '1337',
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
}
;