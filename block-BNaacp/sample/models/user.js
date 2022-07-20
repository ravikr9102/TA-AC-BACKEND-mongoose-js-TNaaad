// requires
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// add userSchema
var userSchema = new Schema ({
    name: String,
    email: String,
    Sports: [String]
});

// create model and export it
var user = mongoose.model('User', userSchema);

module.exports = user;
