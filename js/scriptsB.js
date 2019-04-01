//var sentence = "row row row the boat gently down the stream";

function findUniques(sentence) {
  var words = sentence.toLowerCase().split(' ');
  var wordList = {};
  words.forEach(function(word){
    if(wordList[word] === undefined){
      wordList[word] = 1;
    } else {
      wordList[word] += 1;
    }
  });
  return wordList;
};

$(function(){
  $('#sentenceForm').submit(function(event){
    event.preventDefault();
    var wordList = findUniques($('#sentence').val());
    console.log(wordList);
    $('#output').append("<ul></ul>");

    for (var word in wordList) {
      $('#output ul').append("<li>" + word + ": " + wordList[word] + "</li>");
    }

  });


});
