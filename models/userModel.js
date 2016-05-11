var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
	
	name: {type: String},
	userid: {type: String},
	password: {type: String},
	emailId: {type:String},
    loginToken:{type:String}
});

module.exports = mongoose.model('User', userModel);
