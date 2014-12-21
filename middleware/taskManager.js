var databaseManager = require('./databaseManager');

module.exports = {
    getAllTasks: function (res) {
        var modelSchema = databaseManager.computationalDataSchema;
        var model =  databaseManager.model("ComputationalData", modelSchema);


        var alltasks = databaseManager.getTasks(res);
    }
};