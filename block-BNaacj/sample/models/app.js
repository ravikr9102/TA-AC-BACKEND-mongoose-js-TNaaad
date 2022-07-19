// requires
var mongoose = require('mongoose');
var Schema = mongoose.schema;


var addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId,
    password: { type: String, minlength: 5, maxlength: 15 },
    createdAt: { type: Date, default: new Date() }
});