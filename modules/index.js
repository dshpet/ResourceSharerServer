var cool = require('cool-ascii-faces');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.send(cool() + '  Get out of here. This is a database server  ' + cool());
});

module.exports = router;