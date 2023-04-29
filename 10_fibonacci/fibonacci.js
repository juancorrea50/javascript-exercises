const fibonacci = function(num) {
    //:Solution USED: 
    if(num<0) return "OOPS";
    if(num==0) return 0;
    //Initialize 0 and 1 as variables for gap fill of the logic.
    let numCycle =0;
    //stackVar refers to the stacking of numbers on the variable during the for loop logic
    let stackVar=1;
    //Loop for the value in between 1 and the num value
    for(let i=1;i<num;i++){
        //const variable holds the stacked variable value 
        const hold = stackVar;
        //stackVar takes in numCycle variable which is the initial 0 value and adds it to itself
        stackVar += numCycle;
        //numCycle then becomes assigned with the hold variable which is the old stackVar value
        numCycle = hold;
        //The process is then repeated and all values between 1 and the value entered is added into the stackVar variable
    }

    //Return the stackVar value
    return stackVar;

};

// Do not edit below this line
module.exports = fibonacci;
