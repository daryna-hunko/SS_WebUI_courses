function createField(height, width, symb) {
  if(!isFinite(height)) {
    return {status: 'failed', reason: 'height is not a number or is Infinity'};
  }
  if(!isFinite(width)) {
    return {status: 'failed', reason: 'width is not a number or is Infinity'};
  }
  if(typeof symb !== 'string') {
    return {status: 'failed', reason: 'symb is not a number or string'};
  }

  // default values
  height = height || 4;
  width = width || 4;
  symb = symb || '*';

  let str = new Array(width + 1).join(symb + " ");
  str = str.substring(0 ,str.length - 1);
  let i = 0;
  let resultStr = "\n";
  while (i < height) {
    if (i != 0 && i % 2 != 0) {
      resultStr += str+ " " + "\n";
    } else {
      resultStr += " " + str + "\n";
    }
    i++;
  }
  return resultStr;
}

console.log(createField(6,10,'a'));
console.log(createField(10,'fdgdf','a'));
console.log(createField('fdgdf',10, 5));
console.log(createField(10, 5, undefined));
