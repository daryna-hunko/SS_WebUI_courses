function immitateIndexOf(str, substr, fromIndex = 0) {
    if (str.includes(substr) == false) {
        return -1;
    }
    if (fromIndex !== 0) {
        let temptStr = '';
        for (let i = fromIndex; i < str.length; i++) {
            temptStr += str.charAt(i);
        }
        str = temptStr;
    }
    let arr = str.split(substr);
    return arr[0].length + fromIndex;
}
immitateIndexOf('the tester\'s testing the test', 'test');
immitateIndexOf('tester\'s testing the test', 'test', 7);

function immitateLastIndexOf(str, substr, fromIndex = 0) {
    if (str.includes(substr) == false) {
        return -1;
    }
    str = str.split("").reverse().join("");
    substr = substr.split("").reverse().join("");
    if (fromIndex !== 0) {
        let temptStr = '';
        for (let i = fromIndex; i < str.length; i++) {
            temptStr += str.charAt(i);
        }
        str = temptStr;
    }
    let arr = str.split(substr);
    return arr[0].length + fromIndex;
}
immitateLastIndexOf('the tester\'s testing the test', 'test', 3);
