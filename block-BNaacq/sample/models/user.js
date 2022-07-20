// requires
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// add userSchema
var userSchema = new Schema ({
   name: {type: String, required: true},
   email: {type: String, required: true},
   age: { type: Number, default: 18}
});

var comment = mongoose.model('User',userSchema);

module.exports = user;