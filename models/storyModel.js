var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storyModel = new Schema({
	
	title: {type: String},
    content: {type: String},
	duration: {type: Number},
    credits: {type:String}
});

module.exports = mongoose.model('Story', storyModel);
