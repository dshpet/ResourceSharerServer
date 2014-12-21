/**
 * Created by Dmitryy on 21-Dec-14.
 */
app.get('/recieveData', function(request, response){

    /*var partedObject = "";

     request.on('data', function(data){
     partedObject += data;
     });*/

    response.send("Place to send data");
});
//request must be a json string
app.post('/recieveData', function(request, response){
    var object = null;
    var partedObject = "";

    response.send("JUST SOME RESPONSE TEXT");

    request.on('data', function(data){
        partedObject += data;
    });

    request.on('end', function(){
        console.log("POST method on end : " + request);

        //object = JSON.parse(request);

        var b = request.body;
        var h = request.headers;
        console.log("body : " + b);

        //response.send("Received request: " + request + " parsed object: " + object + "\n Parted string received: " + partedObject);
        //response.send("Parted string received: " + partedObject);
        response.json({"json" : "test"});

        /*object.save(function (err, object){
         if (err) return console.error(err);
         });*/
    });

    request.on('error', function (e) {
        response.send("Error occurred" + e);
    });
});