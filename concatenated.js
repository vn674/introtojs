document.getElementById('string-concatenation-form').addEventListener('submit', concatenateStrings);

function concatenateStrings(event) {
  var word1 = document.getElementById('word1').value;
  var word2 = document.getElementById('word2').value;

  var concatenatedString = concatenate(word1, word2);

  alert(concatenatedString);


function concatenate(word1, word2) {
  // Concatenate the two input strings
  return word1 + ' ' + word2;
}

