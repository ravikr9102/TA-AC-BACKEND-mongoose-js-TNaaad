var mongoose = require('mongoose');
var schema = mongoose.schema;

var userSchema = new Schema ({
    name: String,
    email: String,
    age: Number
});

var userSchema = new Schema ({
    name: String,
    email: {type: String, lowercase: true},
    age: {type : Number, default: 0}
});