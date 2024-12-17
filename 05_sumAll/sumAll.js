const sumAll = function(num1, num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0){
        const range = Math.abs(num1 - num2) + 1;
        const min = Math.min(num1, num2);
        const vals = [...Array(range).keys()];
        const sum = vals.reduce((partialSum, a) => partialSum + a + min, 0);
        return sum;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
