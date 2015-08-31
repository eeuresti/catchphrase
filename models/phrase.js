var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var PhraseSchema = new Schema({
word: {
  type: String,
  default: ""
},
definition: {
  type: String,
  default: ""
}
});

var Food = mongoose.model('Phrase', PhraseSchema);
module.exports = Food;
