var mongoose = require('mongoose');

module.exports = {

    //location of main shared db
    dbUrl: 'mongodb://admin:admin@ds062097.mongolab.com:62097/resource-sharer-statistics',

    //func to connect to dv
    connect: function () {
        mongoose.connect(this.dbUrl);
    },

    //returns an instance of connection
    connection: mongoose.connection,

    //to get a model based on schema
    model: function (name, schema) {
        return mongoose.model(name, schema);
    },

    //instance of db manager module
    databaseInstance: mongoose,

    //transmitting json schemas
    deviceInfoSchema: mongoose.Schema({
        "deviceID": String,
        "deviceData": JSON,
        "acceptance": Boolean
    }),
    computationalDataSchema: mongoose.Schema({
        "computationalTask": String,
        "params": String
    })
};