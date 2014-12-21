var dataReceiver = require ('./dataReceiver');
var dbUrl = require('./dbUrl');


module.exports = function (app) {
    //app.get('/', main.home);

    app.get('/dbUrl', dbUrl.getUrl);
};