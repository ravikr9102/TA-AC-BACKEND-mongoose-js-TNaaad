// requires
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// add userSchema
var userSchema = new Schema ({
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    password: { type: String, minlength: 5 },
    // createdAt: { type: Date, default: new Date()},
    favourites: [String]
},{timestamps: true})


// create model and export it
var user = mongoose.model('User', userSchema);

module.exports = user;