const repeatString = function(str, num) {
    let newString='';
    if(num <0){
        return 'ERROR'
    }
    for(let x=0;x<num;x++){
        newString += str;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
