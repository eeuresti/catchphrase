var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

var db = require('./models');


app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({
    extended: true
}));

var phrases = [{
    word: "HTTP",
    definition: "Hypertext transfer protocol: the standard protocol for transferring hypertext documents on the World Wide Web."
}, {
    word: "Array",
    definition: "Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed.."
}, {
    word: "DOM",
    definition: "one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every node in the document."
}, {
    word: "Query",
    definition: "Used to specify the query for a template. The attributes and content of the query are dependent on the type of datasource being used."
}, {
    word: "Boolean",
    definition: "A boolean is a logical data type that can have only the values true or false."
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(views + 'index.html'));
});

app.get("/phrases", function(req, res) {
    db.Phrase.find({}, function(err, phrases) {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
        res.send(phrases);
    })
});
app.post("/phrases", function(req, res) {
    var newPhrase = req.body;
    db.Phrase.create(newPhrase, function(err, phrase) {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
        res.send(phrase);
    })
});
app.delete("/phrases/:id", function(req, res) {
    var id = req.params.id;
    db.Phrase.remove({
        _id: id
    }, function(err, phrase) {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
        res.sendStatus(200);
    })
});

app.listen(3000, function() {
    console.log("Go to localhost:3000/");
});
