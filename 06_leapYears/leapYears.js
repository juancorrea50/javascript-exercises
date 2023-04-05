const leapYears = function(year) {
    //Variables

    //Statement code
        //input should find the first truthy value from the OR conditional of being divisible by 4 or 400
       // return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
       if(year%4 === 0 && (year % 100 !==0 || year % 400 === 0)){
        return true;
       } else {
        return false;
       }

};

// Do not edit below this line
module.exports = leapYears;
/*
    Had to check solution for this one and even needed a video to show the expanded version of the shorthand boolean statement
    in the solution. The main takeaway from this is that the order of the multi staged conditional is && which determines the 
    first falsy value. Then when none is considered the end of the statement is used which in this case is the OR operator.
    Then the OR operator returns a truthy value if the year ISN'T divisible by 100 but is divisible by 400. The function would
    return true. If not the return statement returns false.
*/
