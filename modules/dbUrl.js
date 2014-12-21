var databaseManager = require('../middleware/databaseManager');
var express = require('express');
var router = express.Router();

router.get('/dbLoc', function(request, response){
    response.send(databaseManager.dbUrl + cool());
});
router.get('/', function(request, response){
    response.send(databaseManager.dbUrl);
});

/*
exports.getUrl = function (request, response, next) {
    response.send(databaseManager.dbUrl);
};*/

module.exports = router;