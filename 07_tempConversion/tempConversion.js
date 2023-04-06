const convertToCelsius = function(input) {
  //Use parameter as constant variable
  let output =0;
  output = ((input-32)*(5/9));
  return parseFloat(output.toFixed(1));
};

const convertToFahrenheit = function(input) {
  let output = 0;
  output = (input*(9/5)+32);
  return parseFloat(output.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
