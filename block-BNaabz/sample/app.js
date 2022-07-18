// requires
var express = require('express');
var mongoose = require('mongoose');

// connect to database
mongoose.connect("mongodb://localhost:27017/sample",(err) => {
    console.log(err ? err : "Connected to database" );
})


// instantiate the app
var app = express();


// listener
app.listen(4000,() => {
    console.log('server listening on port 4k');
})