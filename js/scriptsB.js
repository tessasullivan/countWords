//This code returns unique words and number of occurrences ordered by number of occurrences

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

function sortObject(ourObject) {
  var arrayArray = Object.entries(ourObject);
  arrayArray.sort(function(a, b){
    return b[1] - a[1];
  });
  return arrayArray;
};

$(function(){
  $('#sentenceForm').submit(function(event){
    event.preventDefault();
    var wordList = sortObject(findUniques($('#sentence').val()));
    $('#output').append("<ul></ul>");
    wordList.forEach(function(word){
      $('#output ul').append('<li>' + word[0] + ': ' + word[1] + '</li>');
    });

  });


});
