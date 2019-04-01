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
    console.log(wordList);
    $('#output').append("<ul></ul>");
    wordList.forEach(function(word){
      $('#output ul').append('<li>' + word[0] + ': ' + word[1] + '</li>');
    });




    // for (var word in wordList) {
    //   $('#output ul').append("<li>" + word + ": " + wordList[word] + "</li>");
    // }

  });


});
