const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//process.evn.PORT is for deployment to Heroku
const app = express();
const port = process.env.PORT || 3000; 

//Body parser middleware.  
//Body parser allows us to get data from client forms
//Parses data into json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Cors allows cross-origin data transfer.  I don't know specifically how it works
//but it allows servers on different domains to talk to each other
app.use(cors());

//Start server
app.listen(port, function(){
    console.log('Server started on port ' + port);
});
