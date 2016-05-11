var express = require('express');

var routes = function(Story){
	var storyController = require('../controllers/storyController')(Story);
	var storyRouter = express.Router();

	storyRouter.route('/Story/')
	.post(storyController.post)
	.get(storyController.get);
    
    	storyRouter.use('/storys/:storyId',function(req,res,next){
		story.findById(req.params.storyId	, function(err,story)
				{
			
			if(err)
				{
				res.status(500).send(err);
				}
			else if(story)
				{
				 req.story=story;
				 next();
				}
			else
				{
				res.status(404).send('no story found');
				}
		});
	});
	storyRouter.route('/storys/:storyId').get(function(req, res){

	   res.json(req.story);
		
		
	 })
	 .put(function(req,res){
				
		        req.story.title = req.body.title;
				req.story.credits = req.body.credits;
				req.story.duration = req.body.duration;
				req.story.content = req.body.content;
				req.story.save(function(err){
					if(err)
						res.status(500).send(err);
					else
						res.json(req.story);
				});
				
					
	})
	.patch(function(req, res){
		
		if(req.body._id)
			{
			delete req.body._id;
			}
		 
		for(var p in req.body)
			{
			 req.story[p] = req.body[p];
			}
		req.story.save(function(err){
			if(err)
				res.status(500).send(err);
			else
				res.json(req.story);
		});
		
	}).delete(function(req,res){
		req.story.remove(function(err){
			if(err)
				res.status(500).send(err);
			else
				res.status(204).send('Removed');
		});
		
	});
	
	return storyRouter;
	
};

module.exports = routes;