var databaseManager = require('../middleware/databaseManager');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.send(databaseManager.dbUrl);
});


module.exports = router;