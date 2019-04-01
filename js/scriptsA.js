// function countWords(sentence){
//   var uniqueWords = [];
//   words.forEach(function(word){
//     var counter = 0;
//
//     if(!uniqueWords.includes(word)) {
//       uniqueWords.push(word);
//       words.forEach(function(checkWord){
//         if(checkWord === word) {
//           counter++;
//         }
//       });
//     }

$(function(){
  $('#sentenceForm').submit(function(event){
    event.preventDefault();
    console.log('i have been clicked');
    $('#output').append("<ul></ul>");
    var words = $('#sentence').val().toLowerCase().split(' ');
    console.log(words);


    var uniqueWords = [];
    words.forEach(function(word){
      var counter = 0;

      if(!uniqueWords.includes(word)) {
        uniqueWords.push(word);
        words.forEach(function(checkWord){
          if(checkWord === word) {
            counter++;
          }
        });

        $('#output').append("<li>" + word + ": " + counter + "</li>");
        }
      });

    	});

});
