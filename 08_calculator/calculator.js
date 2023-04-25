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

const power = function(...input) {
  /* ** is the exponent operator */
  //:Solution not used: take in input via spread operator and if there is a length input.reduce by using the first value as a base and the second as an exponent 
  //then use operator to return the output value.
  return input.length ? input.reduce((val1, powerVal) => val1 ** powerVal) : 0;
	
};

const factorial = function(val) {
    let output=1;
    if(val == 0){
      return 1;
    } 
    for(let x=1; x <= val; val--){
      output *= val;
    }
    console.log(output);
    return output;

    /*:Solution not used:
    //With the input variable being n, the recursiveFactorial function is called and used for the recursive logic required for this challenge 
      
      if (n === 0) {
        return 1;
      }
      
      return n * recursiveFactorial(n - 1); 
  */
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
