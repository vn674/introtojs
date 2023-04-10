document.getElementById('conditional-form').addEventListener('submit', checkCondition);

function checkCondition(event) {

  var inputValue = document.getElementById('inputValue').value;

  var result = conditionalFunction(inputValue);
 
  alert(result);
  
}

function conditionalFunction(inputValue) {
  if (inputValue === 'blue') {
    return 'That is the color of the sky.';
  } else if (inputValue === 'yellow') {
    return 'That is the color of a banana.';
  } else if (inputValue === 'red') {
    return 'That is the color of a stop sign.';
  } else {
    return 'Good color choice.';
  }
}