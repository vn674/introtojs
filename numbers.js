document.getElementById('number-comparison-form').addEventListener('submit', compareNumbers);

function compareNumbers(event) {
  var number1 = parseFloat(document.getElementById('number1').value);
  var number2 = parseFloat(document.getElementById('number2').value);

  if (number1 === number2) {
    alert('The numbers are equal.');
  } else if (number1 < number2) {
    alert('Number 1 is less than Number 2.');
  } else if (number1 > number2) {
    alert('Number 1 is greater than Number 2.');
  } else {
    alert('Please enter valid numbers.');
  }
