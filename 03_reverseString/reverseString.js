const reverseString = function(str) {
    let newString = '';
    for(x=0;x<str.length;x++){
        newString += str.charAt(str.length-1-x);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
