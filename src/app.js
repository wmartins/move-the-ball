(function() {

    var http = require('http'), 
    io = require('socket.io'),
    express = require('express'),
    app = express(),
    socket,
    port = 8080;

    app.use(express.static(__dirname + '/static'));

    socket = io.listen(app.listen(port));

    socket.on('connection', function(client){
        client.on('move', function(data){
            console.log('move called');
            client.broadcast.emit('move', data);
        });
    });

}());