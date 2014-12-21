var mongoose = require('mongoose');


var _deviceInfoSchema = mongoose.Schema({
    "deviceID": String,
    "deviceData": JSON,
    "acceptance": Boolean
});
var _computationalTaskSchema = mongoose.Schema({
    "computationalTask": String,
    "params": String
});
var ComputationalTask = mongoose.model('ComputationalTask', _computationalTaskSchema);
var DeviceInfo = mongoose.model('DeviceInfo', _deviceInfoSchema);

module.exports = {

    //location of main shared db
    dbUrl: 'mongodb://admin:admin@ds062097.mongolab.com:62097/resource-sharer-statistics',
    //instance of db manager module
    databaseInstance: mongoose,

    //func to connect to db
    connect: function () {
        mongoose.connect(this.dbUrl);
    },
    disconnect: function () {
        mongoose.disconnect();
    },

    //returns an instance of connection
    connection: mongoose.connection,

    /**
     *
     * @param model  mongoose based model
     * @param params  json params to be executed
     * @returns {*}  query to be exec
     */
    find: function (model, params) {
        var query = model.find(params);
        return query;
    },

    //to get a model based on schema
    model: function (name, schema) {
        return mongoose.model(name, schema);
    },

    getTasks: function (res) {
        var twisted = function (res) {
            return function (err, data) {
                if (err) {
                    console.log('error occured');
                    return;
                }
                res.send(data);
                console.log(data);
            }
        };

        ComputationalTask.find({}, twisted(res));
    },

    //todo later
    save: function (object, model) {

    },
    seed: function () {
        var randomTask = new ComputationalTask({
            computationalTask: "int a = 0; int b = 1; int sum = a + b;",
            params: "straightCompute"
        });
        randomTask.save();

        ComputationalTask.create({
            computationalTask: "try {           wr[0] = new DataOutputStream(finalDbSendConnection.getOutputStream());        wr[0].writeBytes(data.toString());        wr[0].flush();        wr[0].close();    } catch (IOException e) {    e.printStackTrace();} Log.d(\"sendDataToDatabase\", wr[0].toString());",
            params: "parallelCompute"
        });
    },

    //transmitting json schemas
    deviceInfoSchema: _deviceInfoSchema,
    computationalDataSchema: _computationalTaskSchema

    //objects from the schema

};