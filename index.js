var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

var db = require("./models");


app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({
    extended: true
}));

// ROUTES
app.get('/', function(req, res){
	res.sendFile(path.join(views + "index.html"));
});

app.get("/phrases", function (req, res) {
	db.Phrase.find({}, function(err, phrases) {
		if (err) {
			console.log(err);
			return res.sendStatus(400);
		}
		res.send(phrases);
	})
});

app.post("/phrases", function (req, res) {
	var newPhrase = req.body;
	db.Phrase.create(newPhrase, function (err, phrase) {
		if (err) {
			console.log(err);
			return sendStatus(400);
		}
		res.send(phrase);
	})
});

// app.delete("/phrases/:id", function removePhrase(req, res) {
// 	var id = req.params.id;
// 	db.Phrase.remove({_id: id}, function(err, phrase) {
// 		if (err) {
// 			console.log(err);
// 			return res.sendStatus(400);
// 		}
// 		res.sendStatus(200);
// 	})
// });


/* Open port on localhost */
app.listen(3000, function (){
  console.log("listening on port 3000");
});
