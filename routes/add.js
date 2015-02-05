var data = require("../data.json");

exports.addFriend = function(req, res) {    
	res.render('add', data);
	data["friends"].push({
		name: req.query.name,
		description: req.query.description,
		imageUrl: "http://lorempixel.com/400/400/people"
	})
 }