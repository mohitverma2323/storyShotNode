var storyController = function(Story){
	
	var post = function(req,res){
		  
		  var story = new Story(req.body);
		  if(!(req.body.title))
			  {
			  res.status(400);
			  res.send('Title is required');
			  }
		  else
			  {
		  story.save();
		  res.status(201);
		  res.send(story);
			  } 
		 }
		 
	 var get = function(req, res){

		     var query={};
		     
			if(req.query.duration)
			{
			  query.duration = req.query.duration;
			}
			
			Story.find(query, function(err, storys)
					{
				
				if(err)
					{
					res.status(500);
					res.send(err);
					}
				else
					{
					res.json(storys);
					}
			});
		}
  
	 return {
	  post: post,
	  get: get
     } 
}

module.exports = storyController;