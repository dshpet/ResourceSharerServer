var taskManager = require('../middleware/taskManager');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    taskManager.getAllTasks(response);
});


module.exports = router;