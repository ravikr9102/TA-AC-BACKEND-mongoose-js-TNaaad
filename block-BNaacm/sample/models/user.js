// requires
var mongoose = require('mongoose');
var Schema = mongoose.schema;


var userSchema = new Schema ({
    name: String,
    email: {type: String, lowercase: true},
    age: {type : Number, default: 0},
    favorites: [String],
    marks: [Number]
});

var user = mongoose.model('User', userSchema);

module.exports = user;