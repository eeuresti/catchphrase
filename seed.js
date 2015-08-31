var db = require('./models')

var phrases =[
  {word: "The Price is Right", definition: "Come on down!"},
  {word: "Wheel of Fortune", definition: "I'd like to buy a vowel, Pat."},
  {word: "Press Your Luck", definition: "Big bucks, no Whammies!"},
  {word: "Family Feud", definition: "Survey says...!"},
  {word: "Who Wants To be a Millionaire", definition: "I'd like to phone a friend."}
];

db.Phrase.remove({}, function(err, phrase) {
  db.Phrase.create(phrase, function(err, subPhrase){
    if (err) {
      return console.log(err);
    };
    console.log(phrases);
  });
});
