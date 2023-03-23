const removeFromArray = function() {
    //Create variables
    const inputArray = arguments[0];
    let newArray = [];

    //Scans inputArray
    for(let x=0;x<inputArray.length;x++){
        //Find the number to remove
        if(x == arguments[1]){
            //Remove the number and output the new array into newArray
            console.log(inputArray); 
            inputArray.splice(x-1, 1);
            newArray = inputArray;
        }
    }
    //Prints and returns newArray
    console.log(newArray);
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
