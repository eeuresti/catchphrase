var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catchphrase2");





module.exports.Phrase = require("./phrase.js");
