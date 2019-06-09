function fibonachi(obj, length) {
    let fibArray = [],
        minValue,
        min = obj.min, 
        max = obj.max,
        maxValue,
        error ={};
    error = validateInput(min, max, length, error);

    if (length != undefined || 0) {
        let zeros = '';
        for (let i = 0; i < length - 1; i++) {
            zeros += '0';
        }
        minValue = +(1 + zeros);
        maxValue = '';
        for (let i = 0; i < length; i++) {
            maxValue += '9';
        }
        countFibonachiByLength(minValue, length, fibArray);
    }
    if ((min.length && max.length) != 0 && (length == undefined || length == 0 )) {
        countFibonachiByLimits(minValue = min, maxValue = max, fibArray);
    }
    return (Object.keys(error).length !== 0) ? error : fibArray;
}

function countFibonachiByLength(minValue, length, fibArray) {
    let a = minValue,
        b = minValue;
    for (let i = 0; i < length; i++) {
        let newValue = a + b;
        fibArray.push(newValue);
        a = b;
        b = newValue;
    }
}
function countFibonachiByLimits(minValue, maxValue, fibArray) {
    let a = minValue,
        b = minValue;
    while (a + b < maxValue) {
        let newValue = a + b;
        fibArray.push(newValue);
        a = b;
        b = newValue;
    }
}

function validateInput(min, max, length, error) {
    if (isFinite(min) && isFinite(max)) {
        return length = 0;
    }
    if (!isFinite(min) || !isFinite(max) && !isFinite(length)) {
        error = {status: 'failed', reason: 'Not a number'};
    }
    if ((min === 0 && max === 0) && (length === undefined || length === 0)) {
        error = {status: 'failed', reason: 'nothing to count'};
    }
    return error;
}
console.log(fibonachi({min: 100, max: 999}));
console.log(fibonachi({min: 0, max: 0},8));
console.log(fibonachi({min: 100, max: 999},8));
//TOFIX - don't get error - returns undefined
console.log(fibonachi({min: 0, max: 0}));
