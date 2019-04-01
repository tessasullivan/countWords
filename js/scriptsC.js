//This code returns unique words and number of occurrences ordered by word length

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

function sortStringByWordLength(string){
  var array = string.split(' ');
  array.sort(function(a, b){
    return a.length - b.length;
  });
  return array.join(' ');
}

$(function(){
  $('#sentenceForm').submit(function(event){
    event.preventDefault();
    var wordList = findUniques(sortStringByWordLength($('#sentence').val()));
    $('#output').append("<ul></ul>");
    for (var word in wordList) {
      $('#output ul').append("<li>" + word + ": " + wordList[word] + "</li>");
    }

  });


});
