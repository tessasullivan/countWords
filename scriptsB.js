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
  // console.log(arrayArray);
  arrayArray.sort(function(a, b){
    return b[1] - a[1];
  });
  // console.log(arrayArray);
  return arrayArray;
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
    var wordList = sortObject(findUniques($('#sentence').val()));
    $('#output').append("<ul></ul>");
    wordList.forEach(function(word){
      $('#output ul').append('<li>' + word[0] + ': ' + word[1] + '</li>');
    });
  });


});
