const sumAll = function(...args) {
    //Solution included however mine uses arrays to save information rather than simple variables
    let sum=0;

    args.sort();
    if(args[0] < 0 || args[1] < 0 || typeof args[1] !== 'number'){
        return 'ERROR';
    }
    for(let x=args[0];x<=args[1];x++){
        sum += x;
    }


    return sum;

};

// Do not edit below this line
module.exports = sumAll;
/*
    Learned that Arrays should be used for a "flexible amount of variables" scenario and variables should be used for "A definite amount of variables"
    
    In this case I used arrays to take in the values rather than variables, therefore making the solution more complicated than it really needed to be.

    Ran into a snag with object checking on the last test as the for loop would skip the object conditional to return false.
    Solution was to remove the conditional from the for loop as each iteration would check more times than it should and conditional would not work as intended

    Benefit to using arrays was the sort method shrinking the amount of code needed

    Solution speed: 0.588 s
    My Solution speed: 0.589 s
 */