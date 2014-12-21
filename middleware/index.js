module.exports = function (app, express) {

    var router = require('../modules');
    app.use(app.router);
    router(app);

    /**
     * DB manager part
     */
    //get dbmanager
    var databaseManager = require('./databaseManager');
    var mongoose = databaseManager.databaseInstance;

    //connecting to database
    databaseManager.connect();

    //set up db context
    var db = databaseManager.connection;

    db.on('error', console.error.bind(console, 'connection error: '));

    db.once('open', function callback() {
        var DeviceInfoSchema = databaseManager.deviceInfoSchema;
        var ComputationalDataSchema = databaseManager.computationalDataSchema;

        /**
         * FOR TESTING PURPOSE
         */
        /*DeviceInfoSchema.methods.speak = function () {
            var deviceID = this.deviceID
                    ? "Allright i have it " + this.deviceID
                    : "No ID"
                ;
            console.log(deviceID);
        };*/
        /*
        var DeviceInfo = mongoose.model('DeviceInfo', DeviceInfoSchema);
        var genTest = new DeviceInfo({
            deviceID: '1337',
            deviceData: 'Keepo',
            acceptance: false
        });*/

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