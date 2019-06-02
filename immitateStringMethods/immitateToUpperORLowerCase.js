function immitateToUpperCase(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    string = string.split('');
        console.log(string);
    let newStr = [];
    let charArr = [];
    for (var index in string) {
        let charNum = string[index].charCodeAt(0);
        if (96 < charNum && charNum < 123) {
            charNum -= 32;
        }
        charArr.push(charNum);
    }
    for (var index in charArr) {
      let text = String.fromCharCode(charArr[index]);
      newStr.push(text);
    }
    return newStr.join('');
}
console.log(immitateToUpperCase('tEst6'));

function immitateToLowerCase(string) {
    if (typeof(string) !== 'string') {
        return 'undefined';
    }
    string = string.split('');
        console.log(string);
    let newStr = [];
    let charArr = [];
    for (var index in string) {
        let charNum = string[index].charCodeAt(0);
        if (64 < charNum && charNum < 91) {
            charNum += 32;
        }
        charArr.push(charNum);
    }
    for (var index in charArr) {
      let text = String.fromCharCode(charArr[index]);
      newStr.push(text);
    }
    return newStr.join('');
}
console.log(immitateToLowerCase('tEst6'));
