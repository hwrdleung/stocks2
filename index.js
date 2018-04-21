var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var cors = require('cors');
var mongoose = require('mongoose');
var Stock = require('./models/stock.js');
var bodyParser = require('body-parser');
var connections = [];
var path = require('path');

//Connect to mongoDB
mongoose.connect('mongodb://noodles01:noodles01@ds257858.mlab.com:57858/noodlestocks');

app.use(cors());
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Route to main page
app.get('/', (request, response)=>{
    response.sendFile(path.join(__dirname + '/public/index.html'));
});

//Start Server
server.listen(process.env.PORT || 3000);
console.log('Server running...');

//Socket.io

app.get('/update', function(req, res){
    //Client is requesting an update of all stocks currently saved in DB
    Stock.find({}, function(err, data){
        res.json(data);
    });
});

app.delete('/delete/:stockSymbol', function(req, res){
    console.log(req.param);
});

//Connect
io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    //Disconnect
    socket.on('disconnect', function(data){
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    //A connected user adds a new stock  
    socket.on('new stock added', function(data){
     

        //Save new stock to database
        var newStock = new Stock({
            stockSymbol: data.toUpperCase()
        });

        newStock.save(function(err){
            if(err){
                console.log(err);
            }
            io.sockets.emit('refresh');
            console.log('New stock symbol ' + data + ' has been saved to database');
        });
    });

   //A connected user deletes a stock
    socket.on('delete stock', function(data){
        Stock.findOneAndRemove({stockSymbol:data}, function (err){
            if(err){
                console.log(err);
            }
            //Triggers refresh on all connected clients
            io.sockets.emit('refresh');
            console.log(data + ' has been deleted from database');
        });
    });
});