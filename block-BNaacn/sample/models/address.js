// requires
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// add addressSchema 
var addressSchema = new Schema({
    village: String,
    city: { type: String, required: true},
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId
},{timestamps:true});

// create model and export it
var address = mongoose.model('Address', addressSchema);

module.exports = address;