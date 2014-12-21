var mongoose = require('mongoose');

module.exports = {

    dbUrl : 'mongodb://admin:admin@ds062097.mongolab.com:62097/resource-sharer-statistics',

    connect : function(){
        mongoose.connect(this.dbUrl);
    },

    connection : mongoose.connection,

    model : function(name, schema){
        return mongoose.model(name, schema);
    },

    databaseInstance : mongoose
};