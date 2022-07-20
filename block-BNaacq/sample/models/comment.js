// requires
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// add commentSchema 
var commentSchema = new Schema ({
    content: { type: String, required: true},
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
},{ timestamps: true});

var comment = mongoose.model('Comment',commentSchema);

module.exports = comment;