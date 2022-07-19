// requires
var mongoose = require('mongoose');
var Schema = mongoose.schema;

var userSchema = new Schema ({
    name: String,
    description: String
});

var article = mongoose.model('Article', articleSchema);

module.exports = article;