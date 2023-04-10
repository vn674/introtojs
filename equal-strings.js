document.getElementById('string-comparison-form').addEventListener('submit', compareStrings);

function compareStrings(event) {
  var string1 = document.getElementById('string1').value;
  var string2 = document.getElementById('string2').value;

  if (string1 === string2) {
    alert('The strings are equal.');
  } else {
    alert('The strings are not equal.');
  }
