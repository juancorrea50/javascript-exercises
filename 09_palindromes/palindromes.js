const palindromes = function (string) {
    //take in a string copy all it's characters backwards and if the strings match return true if not return false
    //:Solution USED: Flawed logic in previous code was comparing to input string and not the edited array of characters from the string.

    const input = Array.from(string.toLowerCase().replace(/[^a-z]/g, ''));
    const outputArray = [];

    input.forEach(char => outputArray.unshift(char));

    console.log(outputArray.join(''));

    return outputArray.join('') == input.join('');
    
    /*:SOLUTION: Compared and contrasted with original source code and edited source code to follow logic :Solution is still more efficient:
    //Takes the input string and converts it into a string that only contains lower case letters and no punctuation
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");

    //returns the truth or false value if the processed string converted into an array by split method, reversed in order by the reverse method, and joined without
    //the commas carried over from the split method is equal to the processed string.
    return processedString.split("").reverse().join("") == processedString;
    */

};

// Do not edit below this line
module.exports = palindromes;
