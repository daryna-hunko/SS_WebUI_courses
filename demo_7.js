function fibonachi(min, max, length) {
    let fibArray = [],
    minValue,
    maxValue;
    validateInput(min, max, length);

    if (length != undefined || 0) {
        let zeros = '';
        for (let i = 0; i < length - 1; i++) {
            zeros += '0';
        }
        minValue = +(1 + zeros);
        let maxValue = '';
        for (let i = 0; i < length; i++) {
            maxValue += '9';
        }
        countFibonachiByLength(minValue, maxValue, length, fibArray);
    }
    if ((min.length && max.length) != 0 && (length == undefined || length == 0 )) {
        countFibonachiByLimits(minValue = min, maxValue = max, fibArray);
    }
    return fibArray;
}

function countFibonachiByLength(minValue, maxValue, length, fibArray) {
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

function validateInput(min, max, length) {
    if (isFinite(min) && isFinite(max)) {
        length = 0;
    }
    if (!isFinite(min) || !isFinite(max) && !isFinite(length)) {
        return '{status: \'failed\', reason: \'Not a number\'}';
    }
    if ((min === 0 && max === 0) && (length == undefined || 0)) {
        return '{status: \'failed\', reason: \'nothing to count\'}';
    }
}
fibonachi(100,999);
fibonachi(0,0,8);
//TOFIX: fix ignoring min and max (100,999,8)
fibonachi(100,999,8);
