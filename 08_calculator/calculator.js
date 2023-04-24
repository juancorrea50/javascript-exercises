const add = function(v1,v2) {
    return v1+v2;
};

const subtract = function(v1, v2) {
    return v1-v2;
};

const sum = function([...input]) {
  let sum=0;
	input.forEach(val => sum += val);
  return sum;
};

const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
    //Ternary operator that says if there is an array length, array.reduce with an arrow function including the 
    //first item marked accumulator and the second item marked nextItem then multiply them until the entire array is multiplied

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
