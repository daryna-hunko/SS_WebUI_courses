function immitateSplit(string, separator = '', limit = string.length) {
    let splittedArray = [],
        separatorPositionsArray = [],
        indexA = 0,
        indexB,
        index = 0;
    if (typeof(separator) != 'string') {
        return undefined;
    }
    if (separator == '') {
        for (let i = 0; i < limit; i++) {
            splittedArray.push(string.charAt(i));
        }
    }
    if (string.includes(separator) != false) {
        for (let i = 0; i < limit; i++) {
            separatorPositionsArray.push(string.indexOf(separator, index));
            index = (separatorPositionsArray[i] + separator.length);
        }
        separatorPositionsArray.forEach(function(item){
            indexB = item;
            splittedArray.push(string.substring(indexA, indexB));
            indexA = indexB + separator.length;
        });
    }
    return splittedArray;
}
immitateSplit('t,2ft,3tdfgfd,4t,rt,t', ',', 4);
immitateSplit('t,t,t,t,t,t');
immitateSplit('tttt');
immitateSplit('t,t,t,t,t,t', 5);



function immitateRepeat(string, limit = 0) {
    let repeatArr = [];
    for (let i = 0; i < limit; i++) {
        repeatArr.push(string);
    }
    return repeatArr.join('');
}
immitateRepeat('ha',5);
