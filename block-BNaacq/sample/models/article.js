// requires
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// add articleSchema
var articleSchema = new Schema ({
    title: { type: String, required: true},
    description: String,
    tags: { type: Number, default: 0},
    likes: { type: Number, default: 0},
    author: Schema.Types.ObjectId,
    comments:  Schema.Types.ObjectId,
},{ timestamps: true});

var article = mongoose.model('Article',articleSchema);

module.exports = article;