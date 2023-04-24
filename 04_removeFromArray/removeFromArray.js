const removeFromArray = function(array, ...args) {
    //Create variable
    let newArray = [];

    //Scans inputArray and pushes array values that aren't in args to newArray
    array.forEach(item => {
        if(!args.includes(item)){
            newArray.push(item);
        }
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
