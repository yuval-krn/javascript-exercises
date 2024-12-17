const removeFromArray = function() {
    const inputArr = arguments[0];
    const ans = [];
    const toRemove = new Set([...arguments].slice(1));
    for(const value of inputArr){
        if(!toRemove.has(value)) ans.push(value);
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
