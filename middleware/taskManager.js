var databaseManager = require('./databaseManager');

//pls save
module.exports = {
    getAllTasksReadable: function (res) {
        var modelSchema = databaseManager.computationalDataSchema;
        var model =  databaseManager.model("ComputationalData", modelSchema);


        var alltasks = databaseManager.getTasks(res);
    },
    getAllTasks: function (res){
        var db = databaseManager.connection;
        db.collection('computationaltasks', function(err, collection){
            collection.find().toArray(function(err, items) {
                res.send(items);
            });
        });
    }
};