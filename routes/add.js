var data = require("../data.json");

exports.addFriend = function(req, res) {
	res.render('add');

	var name = req.query.name;
	var description = req.query.description;
	var imageURL = "http://lorempixel.com/400/400/people";

	var newFriend = {
		"name": name,
		"description": description,
		"imageURL": imageURL
	}

	console.log("New Friend Added: " +name);

	data["friends"].push(newFriend);

	console.log("Data Added: " +data);
	// Your code goes here
}

			