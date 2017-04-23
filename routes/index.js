var express = require('express');
var router = express.Router();

var fs = require("fs");
var angryObject = JSON.parse(fs.readFileSync("views/angry_birds.json"));
var url = require('url');
var _ = require("underscore");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Angry Birds' });
});

router.get('/angry-birds', function(req, res, next) {
	var queryObject = url.parse(req.url, true).query;
	var passedBirds = _.where(angryObject, queryObject);

 	res.render('allBirds', { 
  		title: 'All Angry Birds',
 		array: passedBirds
 	});
});

router.get('/angry-birds/:id', function(req, res, next) {
	var id = req.params.id;
 	res.render('thisBird', { entry: angryObject[id] });
});

module.exports = router;