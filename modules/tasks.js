var taskManager = require('../middleware/taskManager');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    taskManager.getAllTasksReadable(response);
});


module.exports = router;