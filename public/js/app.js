// On page load
$(function() {
  pageLoad();
});

// function definitions

function pageLoad() {
  getPhrases();
  $("#new-phrase-form").on("submit", function(e){
    e.preventDefault();
    $.post("/phrases", $(this).serialize())
      .done(function(res){
        getPhrases();
        $("#new-phrase-form")[0].reset();
      });
  });
}

function getPhrases() {
    $.get("/phrases", function(res) {
        var phrases = res.reverse();
        console.log(phrases);
        renderPhrases(res);
    });
}

function renderPhrases(phrases) {
  template = _.template($("#phrase-template").html());
  phraseWords = phrases.map(function(phrase) {
    return template(phrase);
  });

  $("#phrase-ul").html("");
  $("#phrase-ul").append(phraseWords);
}

function deletePhrase(context) {
  var phraseId = $(context).data()._id;
  $.ajax({
    url: '/phrases/' + phraseId,
    type: 'DELETE',
    success: function(res) {
      getPhrases();
    }
  });
}
