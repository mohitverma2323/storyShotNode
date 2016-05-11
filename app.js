var express = require('express');
var mongoose = require('mongoose');
var app = express();
var Story = require('./models/storyModel');
var db;

if(process.env.ENV==='Test')
	{
	db = mongoose.connect('mongodb://localhost/storynode');
	}
else
	{
	db = mongoose.connect('mongodb://localhost/storynode');
	}

var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var storyRouter = require('./Routes/storyRoutes')(Story);

app.use('/api', storyRouter);

app.get('/', function(req,res){
	
	res.send('Welcome to this random page!');
});

app.listen(port, function(){
	console.log('Running on port: '+port);
});

module.exports = app;