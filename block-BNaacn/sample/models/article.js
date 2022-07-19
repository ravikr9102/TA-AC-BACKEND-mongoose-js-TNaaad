// requires
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// add articleSchema
var articleSchema = new Schema ({
    title: String,
    description: String,
    tags: [String],
    createdAt: { type: Date, default: new Date() },
    likes: { type: Number, default: 0 }
});

// create model and export it
var article = mongoose.model('Article', articleSchema);

module.exports = article;