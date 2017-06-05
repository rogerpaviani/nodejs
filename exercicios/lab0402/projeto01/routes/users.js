var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var bodyParser  =    require("body-parser");

/* GET users listing. */
router.get('/', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/randomuser', function(err, db) {
		if (err) { throw err; }
		db.collection('users').find().toArray(function(err, result) {
			if (err) { throw err; }
			res.json(result);
		});
	});
});

router.get('/user/:id', function (req, res, next) {
	console.log('Request URL:', req.originalUrl);
	console.log('ID:', req.params.id);
	MongoClient.connect('mongodb://localhost:27017/randomuser', function(err, db) {
		if (err) { throw err; }
		var id = new ObjectID(req.params.id);
		//ObjectId("5931f5888e35adb43b8659d0")

		db.collection('users').findOne({'_id': id}, function(err, result) {
			if (err) { throw err; }
			res.json(result);
		});
	});
});

router.delete('/user/:id', function (req, res, next) {
	console.log('Request URL:', req.originalUrl);
	console.log('ID:', req.params.id);
	MongoClient.connect('mongodb://localhost:27017/randomuser', function(err, db) {
		if (err) { throw err; }
		var id = new ObjectID(req.params.id);
		//ObjectId("5931f5888e35adb43b8659d0")
		db.collection('users').findOne({'_id': id}, function(err, result) {
			if (err) { throw err; }
			res.json(result);
		});
	});
});

router.post('/', function (req, res, next) {
	var first=req.body.first;
	var last=req.body.last;
	var email=req.body.email;

	MongoClient.connect('mongodb://localhost:27017/randomuser', function(err, db) {
		if (err) { throw err; }
		db.collection('users').insertOne({
			name:{
				first:first,
				last:last
			},
			email:email
		},function(err, result) {
			if (err) { throw err; }
			res.json(result);
		});
	});
});
router.put('/user/:id', function (req, res, next) {
	var name=req.body.name;
	var last=req.body.last;
	var email=req.body.email;

	MongoClient.connect('mongodb://localhost:27017/randomuser', function(err, db) {
		if (err) { throw err; }
		db.collection('users').insertOne({
			name:{
				first:name,
				last:last
			},
			email:email
		},function(err, result) {
			if (err) { throw err; }
			res.json(result);
		});
	});
});

module.exports = router;
/*SET DEBUG=randomuser:* & npm start
*/
