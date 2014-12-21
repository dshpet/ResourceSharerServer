var databaseManager = require('../middleware/databaseManager');

exports.getUrl = function (request, response, next) {
    response.send(databaseManager.dbUrl);
};