var db = require('./models')

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

// db.Phrase.remove({}, function(err, result){

  db.Phrase.create(phrases, function(err, phrases){
    if (err) { return console.log(err) };
    console.log("created", phrases.length, "phrases")
    process.exit();
  });

// });
